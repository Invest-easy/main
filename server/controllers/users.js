require('dotenv').config();
const User = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


exports.signin = async (req, res) => {
    try{
        // hashing the pwd using bcrypt and salt
        await bcrypt.hash(req.body.password, 10).then((hash)=>{
        // creating the user from the model
        const user = new User({
            name: req.body.name,
            firstname: req.body.firstname,
            email: req.body.email,
            password: hash,
            telephone: req.body.telephone,
            birthDate: req.body.birthDate,
            adress: req.body.adress,
            nationality: req.body.nationality
        });

        // save function from mongodb -> returns a promise
        user.save().then(()=>{
            console.log(`Successfully created the user : ${user.name}`);
            res.status(201).send();

            }).catch((error)=>{
            // returning the error message if the creation of the user is not possible
            res.status(500).send({message: error.message});
            })
        }).catch((error)=>{
            res.status(500).json({error: error});
        });
    }
    catch{
        res.status(500).send()
    }
};

exports.getAllUsers = (req, res)=>{
    User.find().then( (users) => {
        res.status(200).json(users);
    }).catch( (error) => {
        res.status(500).json({
            error: error
        })
    })
};



exports.login = (req, res) => {
    User.findOne({email: req.body.email}).then(
        (user) => {
            if (!user) {
                return res.status(401).json({
                    error: new Error('User not found')
                });
            }
            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error('Password do not match')
                        });
                    }
                    console.log(process.env.ACCESS_TOKEN_SECRET);
                    const token = jwt.sign({userid: user.id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '24h'});
                    res.status(200).json({
                        userId: user.id,
                        token: token
                    });
                }
            ).catch((error)=>{
                res.status(500).json({
                    error: error
                });
            });
        }
    ).catch((erorr) => {
        res.status(500).json({
            error: error
        });
    })
};

