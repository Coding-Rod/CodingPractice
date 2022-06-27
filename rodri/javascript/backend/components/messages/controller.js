const store = require('./store');

const addMessage = (chat, user, message) => {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            reject(`Falta: ${!chat ? 'chat' : !user ? 'user' : 'message'}`);
            return false;
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date()
        }
        store.add(fullMessage);
        resolve(fullMessage);
    });
};

const getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
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

const deleteMessage = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject("Faltan datos");
            return false;
        }
        store.delete(id)
            .then(() => {
                resolve(`Mensaje ${id} eliminado`);
            })
            .catch(err => {
                reject(err);
            }); 
    });
};

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}