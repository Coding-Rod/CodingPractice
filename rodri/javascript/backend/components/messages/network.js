const express = require("express");
const bodyParser = require("body-parser");
const response = require("../../www/response");
const controller = require("./controller");

const router = express.Router();

router.post("/", (req, res) => {

    controller.addMessage(req.body.user, req.body.message)
    .then((message) => {
        response.success(req, res, message, 201);
    })
    .catch((err) => {
        response.error(req, res, "Información inválida", 400, err);
    })
});

router.get("/", (req, res) => {
    // console.log(req.headers);
    // res.header({
    //     "custom-header": "custom-value"
    // });
    // response.success(req, res, "Lista de mensajes");
    controller.getMessages()
        .then(messages => {
            response.success(req, res, messages);
        })
        .catch(err => {
            response.error(req, res, "Unexpected error", 500, err);
        });
});

router.patch("/:id", (req, res) => {
    console.log(req.params.id);

    controller.updateMessage(req.params.id, req.body.message)
        .then(message => {
            response.success(req, res, message);
        })
        .catch(err => {
            response.error(req, res, "Unexpected error", 500, err);
        });
});

router.delete("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    response.success(req, res, "Mensaje eliminado");
});



module.exports = router;