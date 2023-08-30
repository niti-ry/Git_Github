const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  counselorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Counselor' },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  task: String,
  completed: {type:Boolean,default:false},
  createdAt: Date
});

const TODO = mongoose.model('TODO', todoSchema);

module.exports = TODO;
