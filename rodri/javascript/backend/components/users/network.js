const express = require('express');
const response = require('../../utils/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    controller.listUsers()
        .then((messages) => {
            response.success(req, res, messages);
        })
        .catch((err) => {
            response.error(req, res, "Unexpected error", 500, err);
        });
});

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then((message) => {
            response.success(req, res, message, 201);
        }).catch((err) => {
            response.error(req, res, "Información inválida", 400, err);
        }
        );
});

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    controller.deleteUser(req.params.id)
        .then((message) => {
            response.success(req, res, message, 200);
        }).catch((err) => {
            response.error(req, res, "Información inválida", 400, err);
        });
});

module.exports = router;