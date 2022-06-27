const Model = require('./model');
const db = require('../../data/db');

const uri = "mongodb+srv://db_user_platzi_nodejs:LPNuNiFxlq5SbRSc@cluster0.ul3ff.mongodb.net/telegram";
db(uri);

const addMessage = (message) => {
  console.log(message);
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = async (filterUser) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser) {
      filter = { user: filterUser };
    }
    const messages = Model.find(filter)
      .populate('user', 'name')
      .catch(err => {
        reject(err)
      });
    resolve(messages);
  });
};


const updateText = async (id, message) => {
  const result = await Model.updateOne({_id: id}, {message: message});
  return result;
};

const deleteText = async (id) => {
  const result = await Model.deleteOne({_id: id});
  return result;
};

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateText,
    delete: deleteText,
    //TODO: get
}