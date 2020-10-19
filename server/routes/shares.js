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
 *       - name: Shares
 *     summary: Add a share to the database
 *     description: Add a share to the database
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: share
 *         description: The share to register
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
router.post('/addshare', shareCtrl.add);



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
router.get('/', shareCtrl.getAllShares);

/** 
 * @swagger
 *
 * /shares/{ticker}:
 *   get:
 *     tags:
 *       - name: Shares
 *     summary: Find By Ticker
 *     description: Once logged in, can look for share
 *     parameters:
 *       - in: path
 *         name: ticker
 *         type: string
 *         required: true
 *         description: The share to look for
 *     responses:
 *       200: 
 *         description: Status OK
 *       404:
 *         description: cannot find the share
 *       500:
 *         description: internal error
 */
router.get('/:ticker', shareCtrl.getOneShare);

module.exports = router;