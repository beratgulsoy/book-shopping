const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'berat', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;