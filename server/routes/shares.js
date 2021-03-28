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
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:      
 *               type: object
 *               properties:
 *                 name:
 *                     type: string
 *                 ticker:
 *                     type: string
 *                 description:
 *                     type: string
 *                 lastPrice:
 *                     type: number
 *                 isUp:
 *                     type: boolean
 *                 capitalisation:
 *                     type: number
 *                 logo_name:
 *                     type: string
 *                 tags:
 *                     type: Array<String>
 *                 volume:
 *                     type: number
 *                 per:
 *                     type: number
 *               example:   
 *                  name: CompanyA
 *                  ticker: COMP
 *                  description: Company A
 *                  lastPrice: 302.12
 *                  isUp: true
 *                  capitalisation: 290920192
 *                  logo_name: "../Images/aapl.png"
 *                  tags: ["Tech", "CAC40"]
 *                  volume: 3938293
 *                  per: 3781938
 *     responses:
 *       201:
 *         description: share successfully created
 *       500:
 *         description: internal error
 */
router.post('/add', shareCtrl.add);



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