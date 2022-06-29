const express = require("express");
const app = express();
const server = require("http").Server(app);

const bodyParser = require("body-parser");
const db = require('./data/db');
const router = require("./utils/routes");

const uri = "mongodb+srv://db_user_platzi_nodejs:LPNuNiFxlq5SbRSc@cluster0.ul3ff.mongodb.net/telegram";

db(uri);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use('/app', express.static('public'));

server.listen(3000, () => {
    console.log("Server running on port 3000");
    }    
);