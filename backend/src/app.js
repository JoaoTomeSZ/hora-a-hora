const express = require('express');
const { sequelize } = require('./models')
require('dotenv').config();

const authRoutes = require('./routes/auth-routes');
const userRoutes = require('./routes/user-routes');

const app = express();
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', userRoutes);

sequelize.sync().then(() => console.log('BD sincronizada!'));


module.exports = app;
