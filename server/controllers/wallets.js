require('dotenv').config();
const Wallet = require('../models/wallet');
const Share = require('../models/share');
const mongoose = require('mongoose');


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
    let index = 1;
    Wallet.findOne({user_id: req.params.id}).lean().then((result) =>{
        const lengthPortefolio = result.portefolio.length;
        result.portefolio.forEach(elt => {
            Share.findOne({_id: elt.share_id})
                .then(share => {
                    elt.share_id = share;
                    index += 1;
                    if (index === lengthPortefolio) {
                        console.log(result);
                        res.status(200).send(result);
                        return;
                    }
                    })
                .catch(err => {
                    res.status(500).json({message: 'Cannot find the share in the database', err});
                });
        })
    })
    .catch((err) => {
        res.status(404).json({error: err});
    });
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