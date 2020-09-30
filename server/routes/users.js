require('dotenv').config()
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users');


router.post('/signup', userCtrl.createUser);
router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.getOneUser);
router.get('/:name', userCtrl.getUserByEmail);


module.exports = router;