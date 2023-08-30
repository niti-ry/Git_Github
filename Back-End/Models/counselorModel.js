const mongoose = require('mongoose');

const counselorSchema = new mongoose.Schema({
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  specialization: String,
  availability: [String],
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
  introductoryVideos: [String],
  pastExperience: String,
  patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TODO' }],
  createdAt: Date
});

const Counselor = mongoose.model('Counselor', counselorSchema);

module.exports = Counselor;
