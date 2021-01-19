require('dotenv').config()
const express = require('express');
const router = express.Router();
const dataCtrl = require('../controllers/data');
const auth = require('../middleware/auth');

//Routes
/** 
 * @swagger
 *
 * /data/:
 *   post:
 *     tags:
 *       - name: Data
 *     summary: Get the data from a ticker JSON
 *     description: JSON {'open', 'high', 'low', 'close', 'volume', 'date'}
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:      
 *               type: object
 *               properties:
 *                 ticker:
 *                     type: string
 *                 timeframe:
 *                     type: string
 *                 start:
 *                     type: string
 *                 end:
 *                     type: string
 *               example:   
 *                  ticker: 'TSLA'
 *                  timeframe: 'daily'
 *                  start: '2017-07-09'
 *                  end: '2017-08-09'
 *     responses:
 *       200:
 *         description: data successfully fetched
 *       500:
 *         description: internal error
 */
router.post('/', dataCtrl.getData);


module.exports = router;