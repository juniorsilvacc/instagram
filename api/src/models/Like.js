const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  picture:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', 
    require: true
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    require: true
  }
});

module.exports = mongoose.model('Like', Schema);