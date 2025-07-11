const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database');
const { User } = require('../models')

exports.register = async (nome, email, password) => {
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({nome, email, passwordHash: hash});
        return { id: user.id, nome: user.nome, email: user.email};
}

exports.login = async (email, password) => {
        const user = await User.findOne({where: {email}});
        if(!user) throw new Error('Usuário não encontrado!');

        const valid = await bcrypt.compare(password, user.passwordHash);
        if(!valid) throw new Error('Senha inválida!');

        return jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '7d'});
};
