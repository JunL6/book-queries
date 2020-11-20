const mongoose = require('mongoose');
const schema = require('../schema/schema');
const {Schema} = mongoose;

const authorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model('Author', authorSchema);