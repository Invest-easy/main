const User = require('../models/user');
const bcrypt = require('bcrypt')

exports.createUser = async (req, res) => {
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
        })

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
        res.status(400).json({
            error: error
        })
    })
};

exports.getOneUser = (req, res)=>{
    User.findOne({
        _id: req.params.id
    }).then((user)=>{
        res.status(200).json(user);
    }).catch((error)=>{
        res.status(404).json({
            error: error
        });
    });
};

exports.getUserByEmail = (req, res) =>{
    User.findOne({name: req.body.name}).then((user)=>{
        res.status(200).json(user);
    }).catch((error)=>{
        res.status(404).json({ error: error });
    });
}

