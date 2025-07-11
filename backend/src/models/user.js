const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
        return sequelize.define('User', {
                nome: DataTypes.STRING,
                email: {type: DataTypes.STRING, unique: true },
                passwordHash: DataTypes.STRING,
                valorHora: DataTypes.DECIMAL(10,2),
        });
}