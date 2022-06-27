const store = require('./store');

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            reject("Faltan datos");
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        // console.log(fullMessage);
        store.add(fullMessage);
        resolve(fullMessage);
    });
};

const getMessages = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

module.exports = {
    addMessage,
    getMessages
}