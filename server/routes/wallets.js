require('dotenv').config()
const express = require('express');
const router = express.Router();

const walletCtrl = require('../controllers/wallets');
const auth = require('../middleware/auth');

// Can add the Auth middleware for future authentification

/** 
 * @swagger
 *
 * /wallets/{id}:
 *   get:
 *     tags:
 *       - name: Wallet
 *     summary: Find By id
 *     description: Once logged in, can look for wallet
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The wallet to look for
 *     responses:
 *       200: 
 *         description: Status OK
 *       404:
 *         description: cannot find the wallet
 *       500:
 *         description: internal error
 */
router.get('/:id', walletCtrl.getById);

/** 
 * @swagger
 *
 * /wallets/:
 *   get:
 *     tags:
 *       - name: Wallet
 *     summary: Get the list of all wallets
 *     description: Get the list of all wallets
 *     responses:
 *       200:
 *         description: returns the list of all wallets
 *       401:
 *         description: Unauthorized, need to pass Bearer token
 *       500:
 *         description: internal error (MongoDB promise failed)
 */
router.get('/', walletCtrl.getAll);
router.put('/addshare', walletCtrl.addShares);
router.delete('/delete/:id', walletCtrl.deleteWallet);
router.post('/create', walletCtrl.createWallet);

module.exports = router;