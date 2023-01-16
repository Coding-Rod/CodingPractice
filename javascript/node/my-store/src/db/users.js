const faker = require('faker');

const users_gen = (limit = 10, offset = 0) => {
  const users = [];
  for (let i = parseInt(offset); i < parseInt(limit) + parseInt(offset); i++) {
    users.push({
      id: i,
      name: faker.name.findName(),
      email: faker.internet.email(),
    });
  }
  console.table(users);
  return users;
};

module.exports = users_gen;
