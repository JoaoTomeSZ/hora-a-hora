const {DataTypes} = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize) => {
        return sequelize.define('HoraExtra',{
                data: DataTypes.DATEONLY,
                quantidaeHoras: DataTypes.DECIMAL(5,2),
                tipo: DataTypes.STRING,
                observacoes: DataTypes.TEXT,
        });
};