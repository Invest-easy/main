require('dotenv').config();
const Share = require('../models/share');
const jwt = require('jsonwebtoken');

exports.add = async (req, res) => {
    try {
        const share = new Share({
            name: req.body.name,
            ticker: req.body.ticker,
            description: req.body.description,
            lastPrice: req.body.lastPrice,
            isUp: req.body.isUp,
            capitalisation: req.body.capitalisation,
            tags: req.body.tags,
        });
        share.save().then( () => {
            console.log(`Successfully created the share : ${share.name}`);
            res.status(201).send();
        }).catch( (error) => {
            res.status(500).send({message: error.message});
        });
    } catch{
        res.status(500).send();
    };
}

exports.getOneShare = (req, res) => {
    Share.findOne({ticker: req.params.ticker}).then((share) => {
        res.status(200).json(share);
    }).catch((error) => {
        res.status(404).json({
            error: error
        });
    });
}

exports.getAllShares = (req, res) => {
    Share.find().then( (shares) => {
        // Returns all the shares if request passed
        res.status(200).json(shares);
    }).catch( (error) => {
        // If nothing find
        res.status(404).json({
            error: error
        });
    });
} 