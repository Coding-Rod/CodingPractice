const Model = require('./model');

const addUser = (user) => {
    const myUser = new Model(user);
    myUser.save();
}

const getUsers = async () => {
    const users = await Model.find({});
    return users;
}

const deleteUser = async (id) => {
    const result = await Model.deleteOne({_id: id});
    return result;
}

module.exports = {
    add: addUser,
    list: getUsers,
    delete: deleteUser,
}