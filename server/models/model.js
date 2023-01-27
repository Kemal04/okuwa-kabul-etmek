const { DataTypes } = require('sequelize');
const sequelize = require("../data/db");

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: true },
    phoneNum: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: "User" }
});

const Admin = sequelize.define("admin", {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "Admin", allowNull: false },
});

Admin.findOrCreate({ where: { email: "admin@gmail.com", password: "$2b$10$.2s8SLEln9Dnql5sPuvtfec93qtcKyvMAqDY8zeLg8IcndoHNtXWS", role: "Admin" } })

module.exports = {
    User,
    Admin
};