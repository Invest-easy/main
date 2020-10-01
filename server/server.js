require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

const mongoose = require('mongoose');
const userRouter = require('./routes/users');




console.log(process.env.PASSWORD_BDD)
mongoose.connect(`mongodb+srv://hderoche:${process.env.PASSWORD_BDD}@cluster0.mnhs6.mongodb.net/<dbname>?retryWrites=true&w=majority`,  { useNewUrlParser: true, useUnifiedTopology: true } ).then(()=>{
    console.log('Successfully connected to MongoDB Atlas')
}).catch((error)=>{
    console.log('Unable to connect to the database');
    console.error(error);
})

// Allow the application to handle Json files
app.use(express.json())


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