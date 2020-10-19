require('dotenv').config()
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users');
const auth = require('../middleware/auth');

//Routes
/** 
 * @swagger
 *
 * /users/signup:
 *   post:
 *     tags:
 *       - name: User Authentification
 *     summary: Signup a new user
 *     description: Signup a new user
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:      
 *               type: object
 *               properties:
 *                 name:
 *                     type: string
 *                 firstname:
 *                     type: string
 *                 email:
 *                     type: string
 *                 password:
 *                     type: string
 *                 telephone:
 *                     type: string
 *                 birthDate:
 *                     type: string
 *                 adress:
 *                     type: string
 *                 nationality:
 *                     type: string
 *               example:   
 *                  name: foo
 *                  firstname: bar
 *                  email: foo@bar.com
 *                  password: foobar
 *                  telephone: 0123456789
 *                  birthDate: 2001/02/20
 *                  adress: Paris
 *                  nationality: French
 *     responses:
 *       201:
 *         description: created
 *       500:
 *         description: internal error
 */
router.post('/signup', userCtrl.signin);



/** 
 * @swagger
 *
 * /users/:
 *   get:
 *     tags:
 *       - name: User Overview
 *     summary: Get the list of all users
 *     description: Get the list of all users
 *     responses:
 *       200:
 *         description: returns the list of all users
 *       401:
 *         description: Unauthorized, need to pass Bearer token
 *       500:
 *         description: internal error (MongoDB promise failed)
 */
router.get('/', userCtrl.getAllUsers);

/** 
 * @swagger
 *
 * /users/login:
 *   post:
 *     tags:
 *       - name: User Authentification
 *     summary: Log a user
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:      
 *               type: object
 *               properties:
 *                  email:
 *                     type: string
 *                  password:
 *                     type: string
 *               example:   
 *                  email: foo@bar.com
 *                  password: test
 *     responses:
 *       200:
 *         description: login
 *       401:
 *         description: password or email do not match
 *       500:
 *         description: internal error
 */
router.post('/login', userCtrl.login);

module.exports = router;