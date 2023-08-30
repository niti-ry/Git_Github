const mongoose = require('mongoose');

const moodEntrySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  mood: Number,
  emotions: [String], // Emotions as an array of strings
  timestamp: Date
});

const MoodEntry = mongoose.model('MoodEntry', moodEntrySchema);

module.exports = MoodEntry;


//
// {
//     "userId": "613f9a4dbfa036218c9375a6", // Replace with an actual User ObjectId
//     "mood": 7,
//     "emotions": ["Happiness", "Excitement"],
//     "timestamp": "2023-08-21T12:00:00.000Z"
//   }
  