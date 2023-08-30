const mongoose = require('mongoose');
const questionSchema = require('./Question'); // Adjust the path to match your directory structure

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }], // Reference to questions
  createdAt: Date
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
