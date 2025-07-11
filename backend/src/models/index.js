const sequelize = require('../config/database');
const User = require('./user')(sequelize);
const HoraExtra = require('./horaExtra')(sequelize);

User.hasMany(HoraExtra, {foreignKey: 'userId'});
HoraExtra.belongsTo(User, {foreignKey: 'userId'});

module.exports = {sequelize, User, HoraExtra};