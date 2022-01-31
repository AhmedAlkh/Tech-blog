const userSeeds = require('./user-seeds');
const postSeeds = require('./post-seeds');
const commentSeeds = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('DB sync successful');

  await userSeeds();
  console.log('Users seeded successfully');

  await postSeeds();
  console.log('Posts seeded successfully');

  await commentSeeds();
  console.log('Comments seeded successfully');

  process.exit(0);
};

seedAll();