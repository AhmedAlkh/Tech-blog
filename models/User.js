const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create User model
class User extends Model {}

// Define table columns and configuration

// Table column definitions
User.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Datatypes.STRING,          
            allowNull: false,
            unique: true
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        }
    },
    // Table configuration options
    {
        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // Don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // Don't pluralize name of database table
        freezeTableName: true,
        // Use underscores instead of camel-casing
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;