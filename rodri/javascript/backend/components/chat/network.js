const express = require('express');
const response = require('../../utils/response');
const controller = require('./controller');
const router = express.Router();

router.get('/:userId', (req, res) => {
    controller.listChats(req.params.userId)
        .then((messages) => {
            response.success(req, res, messages);
        }).catch((err) => {
            response.error(req, res, "Unexpected error", 500, err);
        }
        );
});

router.post('/', (req, res) => {
    controller.addChat(req.body.users[0], req.body.users[1])
        .then((message) => {
            response.success(req, res, message, 201);
        }).catch((err) => {
            response.error(req, res, "Información inválida", 400, err);
        }
        );
});

module.exports = router;