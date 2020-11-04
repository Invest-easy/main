require('dotenv').config();
const Wallet = require('../models/wallet');
const mongoose = require('mongoose');
const wallet = require('../models/wallet');

exports.createWallet = (req, res) =>{
    const wallet = new Wallet({
        user_id: req.body.user_id,
        portefolio: []
    });
    wallet.save().then((doc) => {
        console.log('wallet saved for user : ' + req.body.user_id);
        res.send(wallet);
    }).catch((error) => {
        res.send({error: error})
    });
};

exports.getById = (req, res) => {
    let wallet = null;
    Wallet.findById({user_id: req.params.id}).then((result) =>{
        res.status(200).send(result);
        wallet = result;
    }).catch((err) => {
        res.status(404).json({error: err});
    });
    return wallet
};

exports.deleteWallet = (req, res) =>{
    Wallet.findByIdAndDelete({user_id: req.params.user_id}).then((result) => {
        console.log('Wallet successfully deleted');
        res.status(200);
    }).catch((err) => {
        console.log('Failed to delete the wallet');
        res.status(500);
    });
};

exports.getAll = (req, res) => {
    Wallet.find().then((wallets) =>{
        res.status(200).send({danger:"With great power comes great responsability, please ensure you are doing something relevant with these informations",wallets: wallets});
        console.log('Careful all the wallet are being monitored by one entity');
    }).catch((err) =>{
        res.status(400).send({error: err});
    });
};


exports.addShares = (req, res) => {
    Wallet.findById({user_id: req.params.user_id}).then( (doc) =>{
        doc.portefolio = req.body.add_share.map(element => {element.share_id, element.count});
        res.status(200).send(doc);
    }).catch((err) =>{
        res.status(500).send({error: err});
    })
    
    
};