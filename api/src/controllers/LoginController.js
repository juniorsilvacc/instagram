const { response } = require('express');
const User = require('../models/User');

module.exports = {
  async login (req, res) {

    const {username, password} = req.body;

    try {
      
      const validUserName = await User.findOne({
        username
      });

      if(!validUserName){
        return res.status(400).send({message: "User does no exist"});
      }

      const validPassword = await User.findOne({
        password: password
      }).where({
        username: username
      });

      if(!validPassword){
        return res.status(400).send({message: "Password or Usarname invalid"});
      }

      const loggedIn = validPassword;

      return res.status(200).send({message: "Success", data: loggedIn});

    } catch (err) {
      return res.status(400).send(err);
    }

  }
}