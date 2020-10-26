require('dotenv').config()

const http = require('http');

const app = require('./app');

const jwt = require('jsonwebtoken')

const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const shareRouter = require('./routes/shares');
const walletRouter = require('./routes/wallets');
const swagger = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');


const swaggerOptions = {
    swaggerDefinition: {
        components: {},
        info: {
            title: "NodeJS API",
            description: "API documentation ",
            contact: { name: "Hugo Deroche"},
            server: ['http://localhost:3000']
        },
        openapi: '3.0.0'
    },
    apis:[
        './routes/*.js',
        'models/*.js',
    ]
}



//console.log(process.env.PASSWORD_BDD)
mongoose.connect(`mongodb+srv://hderoche:${process.env.PASSWORD_BDD}@cluster0.mnhs6.mongodb.net/<dbname>?retryWrites=true&w=majority`,  { useNewUrlParser: true, useUnifiedTopology: true } ).then(()=>{
    console.log('Successfully connected to MongoDB Atlas')
}).catch((error)=>{
    console.log('Unable to connect to the database');
    console.error(error);
})

// Allow the application to handle Json files



const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

/**
 * Endpoints
 */
app.use('/users', userRouter);
app.use('/shares', shareRouter);
app.use('/wallets', walletRouter)
const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocs, {explorer: true}));


server.listen(port);