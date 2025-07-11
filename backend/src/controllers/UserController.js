const { User } = require('../models');
const UserService = require('../services/UserService');

exports.setValorHora = async (req, res) => {
        const {valorHora} = req.body;
        try{
                await User.setValorHora(req.userId, valorHora);
                res.json({message: 'Valor por hora atualizado.'});

        } catch (error) {
                res.status(400).json({ error: error.message})
        }
};