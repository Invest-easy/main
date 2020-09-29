require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// Allow the application to handle Json files
app.use(express.json())

const posts = []

// Once the authentification is valid, it returns the name of the user
app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.name === req.user.name))
})

app.post('/login', async (req, res) => {
    const user = posts.find(user => user.name === req.body.name)
    if (user == null) {
        res.status(400).send('Cannot find user')
    }
    // Authentification
    try{
    // If the password correspond, send the token
    // Else catch and send error
    if (await bcrypt.compare(req.body.password, user.password)) {

        const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
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


app.post('/user', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
        const user = {
            name: req.body.name,
            title: req.body.title,
            password: hashedPassword
        }
        posts.push(user)
        res.status(201).send()
    }
    catch{
        res.status(500).send()
    }
})


app.get('/user', (req, res)=>{
    res.json(posts)
})

// Middleware to check if the authentification token is valid
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(3000)