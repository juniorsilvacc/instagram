const User = require('../models/User');
const Post = require('../models/Post');

module.exports = {
  async listProfile(req, res){

    const {user_id} = req.params;

    try {
      
      const userInfo = await User.findById(user_id);

      const usersPosts = await Post.find({user: user_id});

      if(!userInfo) return res.status(400).send("User not found");

      return res.status(200).send({
        message: "User found",
        userInfo,
        usersPosts
      })

    } catch (err) {
      return res.status(400).send(err)
    }

  }
}