const path = require("path");
const Sequelize = require("sequelize");
const mysql = require("mysql2");
const config = require('../utils/config');

const database = {};

const sequelize = new Sequelize(config.sqlite_config);
const db = mysql.createConnection(config.mysql_config);

const ipa = sequelize.import(path.join(__dirname, 'ipa'));
// const ipa = db.promise();

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log('mysql connected ...')
})
sequelize.sync();

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.ipa = ipa;
database.db = db;

module.exports = database;


