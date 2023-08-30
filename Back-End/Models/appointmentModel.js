const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  counselorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Counselor' },
  date: Date,
  time: String,
  status: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
