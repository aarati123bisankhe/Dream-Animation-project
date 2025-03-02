const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const User = sequelize.define("User", {
    id: {  // Change from "user_id" to "id" to match your DB schema
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "user"
    }
}, {
    timestamps: true,
    createdAt: "created_at",  // Match your database column names
    updatedAt: "updated_at"
});

module.exports = User;
