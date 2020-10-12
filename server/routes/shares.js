require('dotenv').config()
const express = require('express');
const router = express.Router();

const shareCtrl = require('../controllers/shares');
const auth = require('../middleware/auth');
const share = require('../models/share');

//Routes
/** 
 * @swagger
 *
 * /shares/add:
 *   post:
 *     tags:
 *       - name: User Authentification
 *     summary: Signup a new user
 *     description: Signup a new user
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to login
 *         schema:
 *              type: object
 *              required: true
 *                 - name
 *                 - fistname
 *                 - email
 *                 - password
 *                 - telephone
 *                 - birthDate
 *                 - adress
 *                 - nationality
 *              properties:
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
 *     responses:
 *       201:
 *         description: user successfully created
 *       500:
 *         description: internal error
 */
router.post('/addshare', auth, shareCtrl.add);



/** 
 * @swagger
 *
 * /shares/:
 *   get:
 *     tags:
 *       - name: Shares
 *     summary: Get the list of all the shares availiable
 *     description: Get the list of all shares
 *     responses:
 *       200:
 *         description: returns the list of shares registered in the database
 *       401:
 *         description: Unauthorized, need to pass Bearer token
 *       500:
 *         description: internal error (MongoDB promise failed)
 */
router.get('/', auth, shareCtrl.getAllShares);

/** 
 * @swagger
 *
 * /shares/:ticker:
 *   post:
 *     tags:
 *       - name: User Authentification
 *     summary: Log a user
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: User
 *         description: The user to login
 *         schema:
 *              type: object
 *              required: true
 *                 - email
 *                 - password
 *              properties:
 *                 email:
 *                     type: string
 *                 password:
 *                     type: string
 *     responses:
 *       200:
 *         description: login
 *       401:
 *         description: password or email do not match
 *       500:
 *         description: internal error
 */
router.post('/:ticker', auth, shareCtrl.getOneShare);

module.exports = router;