const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');



/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - ticker
 *          - description
 *          - lastPrice
 *          - isUp
 *          - capitalisation
 *          - tags
 *        properties:
 *          name:
 *              type: string
 *          ticker:
 *              type: string
 *          description:
 *              type: string
 *              description: infos about the company
 *          lastPrice:
 *              type: number
 *          isUp:
 *              type: boolean
 *          capitalisation:
 *              type: string
 *              description: amount of money
 *          tags:
 *              type: Array
 */
const shareSchema = mongoose.Schema({
    name: { type: String, required: true },
    ticker: { type: String, required: true, unique: true },
    description: {type:String, required:true},
    lastPrice: {type: number, required: true},
    isUp:{type: Boolean, required: true},
    capitalisation: {type: Boolean, required: true},
    tags:{type: Array, required: true},

  });
  shareSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model('Share', shareSchema);