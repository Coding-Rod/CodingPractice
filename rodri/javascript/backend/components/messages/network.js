const express = require("express");
const bodyParser = require("body-parser");
const response = require("../../www/response");

const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "custom-value"
    });
    response.success(req, res, "Lista de mensajes");
});

router.delete("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    response.success(req, res, "Mensaje eliminado");
});

router.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    req.query.error=="true"
    ? response.error(req, res, "Error al crear el mensaje", 400, "Es solo una simulacion")
    : response.success(req, res, "Created successfully", 201);
});

module.exports = router;