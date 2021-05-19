const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  picture:{
    type: String,
    require: true
  },
  description:{
    type: String,
    require: true
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    require: true
  }

});

module.exports = mongoose.model('Post', Schema);