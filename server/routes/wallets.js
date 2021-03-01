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

/** 
 * @swagger
 *
 * /wallets/addshares:
 *   put:
 *     tags:
 *       - name: Wallet
 *     summary: Add shares to a portefolio
 *     description: Add shares to a portefolio
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:      
 *               type: object
 *               properties:
 *                 user_id:
 *                     type: string
 *                 portefolio:
 *                     type: Array
 *               example:   
 *                  user_id: 27enefnZDZIjdiz
 *                  portefolio: [{share_id: "37Jiei82Nei", count: 2}, {...}]
 *     responses:
 *       200: 
 *         description: Status OK
 *       404:
 *         description: cannot add shares to the portefolio
 *       500:
 *         description: internal error
 */
router.put('/addshares', walletCtrl.addShares);

/** 
 * @swagger
 *
 * /wallets/delete/{id}:
 *   delete:
 *     tags:
 *       - name: Wallet
 *     summary: Find By id and delete it
 *     description: Once logged in, looks for a wallet by id and deletes it
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: The wallet to look for and delete
 *     responses:
 *       200: 
 *         description: Status OK
 *       404:
 *         description: cannot find the wallet
 *       500:
 *         description: internal error
 */
router.delete('/delete/:id', walletCtrl.deleteWallet);

/** 
 * @swagger
 *
 * /wallets/create:
 *   post:
 *     tags:
 *       - name: Wallet
 *     summary: Create a wallet to a given user
 *     description: Create and instantiate a wallet for a given user
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:      
 *               type: object
 *               properties:
 *                 user_id:
 *                     type: string
 *               example:   
 *                  user_id: 27enefnZDZIjdiz
 *     responses:
 *       200: 
 *         description: Status OK
 *       500:
 *         description: internal error
 */
router.post('/create', walletCtrl.createWallet);

module.exports = router;