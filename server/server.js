require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const userCtrl = require('./controllers/users');
const User = require('./models/user');
console.log(process.env.PASSWORD_BDD)
mongoose.connect(`mongodb+srv://hderoche:${process.env.PASSWORD_BDD}@cluster0.mnhs6.mongodb.net/<dbname>?retryWrites=true&w=majority`,  { useNewUrlParser: true, useUnifiedTopology: true } ).then(()=>{
    console.log('Successfully connected to MongoDB Atlas')
}).catch((error)=>{
    console.log('Unable to connect to the database');
    console.error(error);
})

// Allow the application to handle Json files
app.use(express.json())

const posts = []

// Once the authentification is valid, it returns the name of the user
app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.name === req.user.name))
})

app.post('/login', async (req, res) => {
    
    // Need to get the user from the database, compare pwd and enable connection

    // Authentification
    try{
    // If the password correspond, send the token
    // Else catch and send error
    if (await bcrypt.compare(req.body.password, found_user.password)) {

        const access_token = jwt.sign(found_user, process.env.ACCESS_TOKEN_SECRET)
        res.json({  
                    message: "Success",
                    token : {access_token: access_token}
                })
        }
        else {
            res.send('Not Allowed')
        }
    }
    catch{
        res.status(500).send()
    }
})


// Middleware to check if the authentification token is valid
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user;
        next();
    })
}
app.use('/users', userRouter);

app.listen(3000);