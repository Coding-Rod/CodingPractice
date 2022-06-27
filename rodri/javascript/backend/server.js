const express = require("express");
const bodyParser = require("body-parser");
const response = require("./network/response");

const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(router);

router.get("/message", (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "custom-value"
    });
    response.success(req, res, "Lista de mensajes");
});

router.delete("/message", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    // res
    // .status(201)
    // .send({
    //     error: "",
    //     message: "Message deleted"
    // });
    response.success(req, res, "Mensaje eliminado");
});

router.post("/message", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    req.query.error=="true"
    ? response.error(req, res, "Error al crear el mensaje", 400)
    : response.success(req, res, "Created successfully", 201);
});

// app.use('/', (req, res) => {
//     res.send('Hello World!');
// });

app.listen(3000);

console.log('listening on port 3000');