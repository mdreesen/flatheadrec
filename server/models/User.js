const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { beforeCreate, update } = require('./Restaurant');

// Create User Model
class User extends Model { }

// Define table columns and configuration
User.init(
    {
        id: {
            // use sequelize dataTypes
            type: DataTypes.INTEGER,
            // NOT NULL
            allowNull: false,
            // instruct this is primary key,
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the password must be at least 4 characters
                len: [4]
            }
        }
    },
    {
        hooks: {
            // Set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },

            // Setup up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        // Pass import
        sequelize,
        // Don't automatically create "createdAt/updatedAt" filds
        timestamps: false,
        // Don't pluralize names of tables
        freezeTableName: true,
        // Use underscores instead of camel-case
        underscored: true,
        // Model names stay lowercase
        modelName: 'user'
    }
);

module.exports = User;