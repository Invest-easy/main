const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');



/**
 * @swagger
 *  components:
 *    schemas:
 *      Share:
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
 *          logo_name:
 *              type: string
 *              description: url of the logo
 *          tags:
 *              type: Array<String>
 *          volume:
 *              type: Number
 *          per:
 *              type: Number
 */
const shareSchema = mongoose.Schema({
    name: { type: String, required: true },
    ticker: { type: String, required: true, unique: true },
    description: {type:String, required:true},
    lastPrice: {type: Number, required: true},
    isUp:{type: Boolean, required: true},
    capitalisation: {type: Number, required: true},
    logo_name: {type: String, required: true},
    tags:{type: [String], required: true},
    volume :{type: Number, required: true},
    per:{type: Number , required: true}

  });
  shareSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model('Share', shareSchema);