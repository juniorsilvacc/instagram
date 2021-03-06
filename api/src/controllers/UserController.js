const User = require('../models/User');

module.exports = {
  async createUser(req, res){
    const {username, password, name, description, avatar, url} = req.body;

    try {

      const userAlreadyExists = await User.findOne({
        username
      });

      if(userAlreadyExists){
        return res.status(400).send({message: "User already exists. Try different one"})
      }

      const createdUser = await User.create({
        username, 
        password, 
        name, 
        description, 
        avatar,
        url
      });

      return res.status(200).send({
        message: 'User created sucessfully', 
        data: createdUser
      });
      
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  async listUsers(req, res){
    try {

      const allUsers = await User.find()

      return res.status(200).send({
        message: 'User All Found', 
        data: allUsers
      });
      
    } catch (err) {
      return res.status(400).send(err);
    }
  }

}