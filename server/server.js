require('dotenv').config()

const http = require('http');
const app = require('./app');

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
app.use('/users', userRouter);
server.listen(port);


