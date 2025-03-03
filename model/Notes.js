const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  curUserId:{
    type: String
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  noteBg: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Note', noteSchema);;
