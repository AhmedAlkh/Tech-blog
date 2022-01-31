const { User } = require('../models');

const user_data = [
  {
    username: 'javajohn',
    password: '12345'
  },
  {
    username: 'bobthecoder',
    password: '54321'
  },
  {
    username: 'webpagewill',
    password: 'password'
  }
];

const userSeeds = () => User.bulkCreate(user_data, {individualHooks: true});

module.exports = userSeeds;