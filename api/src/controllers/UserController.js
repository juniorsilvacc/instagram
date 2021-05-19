const User = require('../models/User');

module.exports = {
  async createUser(req, res){
    const {usarname, password, name, description, url} = req.body;

    try {
      const createdUser = await User.create({
        usarname, 
        password, 
        name, 
        description, 
        url
      });

      return res.status(200).send({
        message: 'User created sucessfully', 
        data: createdUser
      });
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}