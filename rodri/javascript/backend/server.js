const express = require("express");

var app = express();

app.use('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000);

console.log('listening on port 3000');