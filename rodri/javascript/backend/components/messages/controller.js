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

const updateMessage = (id, message) => {
    return new Promise( async (resolve, reject) => {
        if (!id || !message) {
            reject("Faltan datos");
            return false;
        }
        const result = await store.update(id, message);

        resolve(message);
    });
};

module.exports = {
    addMessage,
    getMessages,
    updateMessage
}