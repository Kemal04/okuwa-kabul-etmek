const mysql = require('mysql2');
const config = require("../config");

const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    dialect: "mysql",
    host: config.db.host,
    define: {
        timestamps: true
    }
});

async function connect(){
    try{
        await sequelize.sync({alter: true});
        await sequelize.authenticate();
        console.log("server running and all tables sync");
    }
    catch(err){
        console.log(err)
    }
}

connect();

module.exports = sequelize;