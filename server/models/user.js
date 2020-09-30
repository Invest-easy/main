const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    firstname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    telephone: { type: String, required: true },
    birthDate: { type: String, required: true },
    adress: { type: String, required: true},
    // possibly an enum later
    nationality: { type: String, required: true },
    // deal with images later
  });
  userSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model('User', userSchema);