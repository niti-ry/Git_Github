const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  moodEntries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MoodEntry' }],
  createdAt: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User;
