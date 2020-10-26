const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

/**
 * Methode pour gestion de portefeuille
 * 
 * Create
 *      Create Empty wallet
 * Update
 *      Add Share to wallet
 *      Remove Shares from wallet - 1
 * Delete
 *      Delete wallet -  1 method
 * Get
 *      Get the content of the wallet - 1 method
 *      God Mod ? (sees everything) - 1 method
 * 
 * Architecture
 *      Wallet stores the ID of the User and an array of {Share_id, amount}
 */


/**
 * @swagger
 *  components:
 *    schemas:
 *      Wallet:
 *        type: object
 *        required:
 *          - user_id
 *          - portefolio
 *        properties:
 *          user_id:
 *              type: string
 *          shares:
 *              type: array
 */
const walletSchema = mongoose.Schema({
    user_id: { type: String, required: true , unique: true},
    portefolio: [Schema.Types.Mixed],
});

walletSchema.plugin(uniqueValidator);
  
module.exports = mongoose.model('Wallet', walletSchema);