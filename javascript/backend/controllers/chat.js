const store = require('../database/chat');

const addChat = (user1, user2) => {
    return new Promise((resolve, reject) => {
        if (!user1 || !user2) {
            return Promise.reject('User is required');
        };
        const chat = { users: [user1, user2] };
        console.log(chat);
        store.add(chat);
        resolve(chat);
    });
};

const listChats = (id) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(id));
    });
}

module.exports = {
    addChat,
    listChats,
}