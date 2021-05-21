const User = require('../models/User');
const Post = require('../models/Post');

module.exports = {
  async likePost (req, res) {

    const {post_id} = req.params;
    const {user_id} = req.headers;

    try {
      
      const likedPost = await Post.findById(post_id); 
      if(!likedPost) return res.status(400).send("Post does not exist");

      if(likedPost.likes.includes(user_id)) return res.status(400).send("Post already exists");

      likedPost.likes.push(user_id);

      await likedPost.save();

      return res.status(200).send({
        message: "Liked post", 
        likedPost
    });

    } catch (err) {
      return res.status(400).send(err)
    }

  },

  async deslikePost (req, res) {

    const {post_id} = req.params;
    const {user_id} = req.headers;

    try {

      const deslikedPost = await Post.findById(post_id); 
      if(!deslikedPost) return res.status(400).send("Post does not exist");

      if(!deslikedPost.likes.includes(user_id)) return res.status(400).send("Post not liked yet");

      deslikedPost.likes.pull(user_id);

      await deslikedPost.save();

      return res.status(200).send({
        message: "Desliked post",
        deslikedPost
      });
      
    } catch (err) {
      return res.status(400).send(err)
    }

  }
}