const store = require('./store');

const addUser = (name) => {
    return new Promise((resolve, reject) => {
        if (!name) {
            return Promise.reject('Name is required');
        };
        const user = { name: name };
        console.log(user);
        store.add(user);
        resolve(user);
    });
};

const listUsers = () => {
    return new Promise((resolve, reject) => {
        store.list()
            .then(resolve)
            .catch(reject);
    });
};

module.exports = {
    addUser,
    list: listUsers,
};