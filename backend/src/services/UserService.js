const { User } = require('../models');

exports.setValorHora = async (userId, valorHora) => {
        await User.update({valorHora}, { where: {id: userId}})
};