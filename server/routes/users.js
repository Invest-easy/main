require('dotenv').config()
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signin);
router.get('/', auth, userCtrl.getAllUsers);
router.post('/login', userCtrl.login);

module.exports = router;