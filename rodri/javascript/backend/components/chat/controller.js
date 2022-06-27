const store = require('./store');

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

const listChats = () => {
    return new Promise((resolve, reject) => {
        store.list()
            .then(resolve)
            .catch(reject);
    });
}

module.exports = {
    addChat,
    listChats,
}