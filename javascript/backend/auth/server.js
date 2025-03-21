require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5500" })); // Permite peticiones desde el frontend

const users = [{ id: 1, username: "admin", password: "12345" }];

function generateTokens(user, refreshRenewed = false) {
    const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "15m" });
    let refreshToken = null;

    if (refreshRenewed) {
        refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_SECRET, { expiresIn: "7d" });
    }

    return { accessToken, refreshToken };
}

// Middleware para verificar el Access Token
function authenticateToken(req, res, next) {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json({ message: "Acceso denegado" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Token inválido" });
        req.user = user;
        next();
    });
}

// **1️⃣ Login: Generar Access Token y Refresh Token**
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ message: "Credenciales incorrectas" });

    const { accessToken, refreshToken } = generateTokens(user, true);

    res.cookie("accessToken", accessToken, { httpOnly: true, maxAge: 900000 }); // 15 minutos
    res.cookie("refreshToken", refreshToken, { httpOnly: true, maxAge: 604800000 }); // 7 días
    res.json({ message: "Autenticado", refreshToken });
});

// **2️⃣ Endpoint protegido**
app.get("/protected", authenticateToken, (req, res) => {
    res.json({ message: "Accediste a un recurso protegido", userId: req.user.id });
});

// **3️⃣ Refrescar el Access Token**
app.post("/refresh", (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json({ message: "No hay refresh token" });

    jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Refresh token inválido" });

        const now = Math.floor(Date.now() / 1000);
        const refreshExp = jwt.decode(refreshToken).exp;

        const refreshRenewed = refreshExp - now < parseInt(process.env.REFRESH_RENEWAL);

        const { accessToken, newRefreshToken } = generateTokens(user, refreshRenewed);

        res.cookie("accessToken", accessToken, { httpOnly: true, maxAge: 900000 });
        if (refreshRenewed) {
            res.cookie("refreshToken", newRefreshToken, { httpOnly: true, maxAge: 604800000 });
        }

        res.json({ accessToken, refreshRenewed });
    });
});

// **4️⃣ Logout**
app.post("/logout", (req, res) => {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.json({ message: "Cierre de sesión exitoso" });
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
