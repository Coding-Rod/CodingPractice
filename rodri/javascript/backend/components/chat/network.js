const express = require('express');
const response = require('../../utils/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    controller.listChats()
        .then((messages) => {
            response.success(req, res, messages);
        }).catch((err) => {
            response.error(req, res, "Unexpected error", 500, err);
        }
        );
});

router.post('/', (req, res) => {
    controller.addChat(req.body.user1, req.body.user2)
        .then((message) => {
            response.success(req, res, message, 201);
        }).catch((err) => {
            response.error(req, res, "Información inválida", 400, err);
        }
        );
});

module.exports = router;