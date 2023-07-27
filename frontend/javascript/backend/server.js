const express = require("express");
const app = express();
const server = require("http").Server(app);

const cors = require("cors");
const bodyParser = require("body-parser");
const socket = require("./utils/socket");
const db = require('./database/db');
const router = require("./utils/routes");

const uri = "mongodb+srv://db_user_platzi_nodejs:LPNuNiFxlq5SbRSc@cluster0.ul3ff.mongodb.net/telegram";
db(uri);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, () => {
    console.log("Server running on port 3000");
});