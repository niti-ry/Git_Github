const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  counselorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Counselor' },
  rating: Number,
  review: String,
  createdAt: Date
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
