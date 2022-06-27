const db = require('mongoose');
const Model = require('./model');

const uri = "mongodb+srv://db_user_platzi_nodejs:LPNuNiFxlq5SbRSc@cluster0.ul3ff.mongodb.net/telegram";

db.Promise = global.Promise;
db.connect(uri, {
    useNewUrlParser: true,
});

console.log("[database] Connected to MongoDB");

const addMessage = (message) => {
  console.log(message);
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = () => {
  
};

module.exports = {
    add: addMessage,
    list: getMessages
    //TODO: get
    //TODO: update
    //TODO: delete
}