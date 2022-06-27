const Model = require('./model');

const addChat = (chat) => {
    const myChat = new Model(chat);
    myChat.save();
}

const getChats = async () => {
    const chats = await Model.find({});
    return chats;
}

module.exports = {
    add: addChat,
    list: getChats,
}