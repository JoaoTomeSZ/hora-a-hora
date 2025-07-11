const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

module.exports = {
        async login(email, password){
                const user = await db('users').wher
        }
}