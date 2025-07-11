const express = require('express');
const auth = require('../middlewares/auth');
const {setValorHora} = require('../controllers/UserController');
const router = express.Router();

router.put('/user/valor-hora', auth, setValorHora);

module.exports = router;