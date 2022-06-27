const express = require("express");
const response = require("../../utils/response");
const controller = require("./controller");
const multer = require("multer");
const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

router.post("/", upload.single('file'), (req, res) => {
    controller.addMessage(req.body.chat, req.body.user, req.body.message)
    .then((message) => {
        response.success(req, res, message, 201);
    })
    .catch((err) => {
        response.error(req, res, "Información inválida", 400, err);
    })
});

router.get("/", (req, res) => {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
        .then(messages => {
            response.success(req, res, messages);
        })
        .catch(err => {
            response.error(req, res, err.message, err.error, err);
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

router.delete("/:id", (req, res) => {
    console.log(req.params.id);

    controller.deleteMessage(req.params.id)
        .then(message => {
            response.success(req, res, message);
        })
        .catch(err => {
            response.error(req, res, "Unexpected error", 500, err);
        });
});



module.exports = router;