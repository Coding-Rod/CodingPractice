const express = require("express");
const router = express.Router();

var app = express();

app.use(router);

router.get("/message", (req, res) => {
    res.json({ message: "Hello World" });
});

router.post("/message", (req, res) => {
    res.send("Message received");
});

// app.use('/', (req, res) => {
//     res.send('Hello World!');
// });

app.listen(3000);

console.log('listening on port 3000');