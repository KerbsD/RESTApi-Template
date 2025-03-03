const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  currentUser:{
    type: String
  },
  taskName: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Healthy', 'Neutral', 'Bad'],
    default: 'Neutral'
  },
  status: {
    type: String,
    enum: ["In Progress", "Done"],
    default: "In Progress"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Todo', todoSchema);

