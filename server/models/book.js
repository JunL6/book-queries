const mongoose = require('mongoose');
const schema = require('../schema/schema');
const {Schema} = mongoose;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = mongoose.model('Book', bookSchema);