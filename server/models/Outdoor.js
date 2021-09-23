const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create User Model
class Outdoor extends Model { }

// Define table columns and configuration
Outdoor.init(
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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        menu: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        // Pass import
        sequelize,
        // Don't automatically create "createdAt/updatedAt" fields
        timestamps: false,
        // Don't pluralize names of tables
        freezeTableName: true,
        // Use underscores instead of camel-case
        underscored: true,
        // Model names stay lowercase
        modelName: 'Restaurant'
    }
);

module.exports = Outdoor;