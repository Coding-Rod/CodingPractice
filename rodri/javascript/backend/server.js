const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(router);

router.get("/message", (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "custom-value"
    });
    res.json({ message: "Hello World" });
});

router.delete("/message", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res
    .status(201)
    .send({
        error: "",
        message: "Message deleted"
    });
});

// router.post("/message", (req, res) => {
//     res.send("Message received");
// });

// app.use('/', (req, res) => {
//     res.send('Hello World!');
// });

app.listen(3000);

console.log('listening on port 3000');