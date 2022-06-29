const express = require("express");
const message = require("../routes/messages");
const user = require("../routes/users");
const chat = require("../routes/chat");

const routes = (server) => {
    server.use("/message", message),
    server.use("/user", user),
    server.use("/chat", chat);
};

module.exports = routes;