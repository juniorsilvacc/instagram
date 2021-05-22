const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  username:{
    type: String,
    require: true
  },
  password:{
    type: String,
    require: true
  },
  name:{
    type: String,
    require: true
  },
  description:{
    type: String,
  },
  avatar:{
    type: String,
    require: true
  },
  url:{
    type: String,
  }
});

module.exports = mongoose.model('User', Schema);