const Model = require('./model');

const addChat = (chat) => {
    const myChat = new Model(chat);
    myChat.save();
}

const getChats = async (userId) => {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (userId) {
            filter = { users: userId };
        }
    Model.find(filter)
        .populate('users', 'name')
        .then(resolve)
        .catch(reject);
    });
};

module.exports = {
    add: addChat,
    list: getChats
};