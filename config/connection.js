// Import the Sequelize constructor form the library
const Sequelize = require('sequelize');
// Create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('tech_blog_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;