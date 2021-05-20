const Post = require('../models/Post');

module.exports = {
  async createPost (req, res){

    const {picture, description} = req.body;

    const {user} = req.headers;

    try {

      const newPost = await Post.create({
        picture, 
        description,
        user
      });

      return res.status(200).send({message: "Post created successfully", data: newPost});
      
    } catch (err) {
      return res.status(400).send(err);
    }

  },

  async listAllPosts (req, res){

    try {

      const allPosts = await Post.find().populate('user');

      return res.status(200).send({message: "All Posts", data: allPosts});
      
    } catch (err) {
      return res.status(400).send(err)
    }

  },

  async deletePost (req, res){

    const {post_id} = req.params;
    const{user_id} = req.headers;

    try {

      const belongToUser = await Post.findOne({user: user_id}).where({_id: post_id});
      if(!belongToUser){
        return res.status(400).send({message: "Operation not allowed"});
      }

      const postExist = await Post.findById(post_id);
      if(!postExist){
        return res.status(400).send({message: "Post does not exist"});
      }
      
      const deletePost = await Post.findByIdAndDelete(post_id);

      return res.status(200).send({message: "Delete successfully", data: deletePost});

    } catch (err) {
      return res.status(400).send(err);
    }

  },

  async editPost (req, res){

    const {description} = req.body;
    const {post_id} = req.params;
    const {user_id} = req.headers;

    try {

      const postExist = await Post.findById(post_id)
      if(!postExist) return res.status(400).send("Post does not exist")

      const belognsToUser = await Post.findOne({user: user_id}).where({_id: post_id})
      if(!belognsToUser) return res.status(400).send("Operation not allowed")

      const editPost = await Post.findByIdAndUpdate(post_id, {
        description
      }, {new: true})

      return res.status(200).send({
        message: "Updated successfully", 
        data: editPost
      })
      
    } catch (err) {
      return res.status(400).send({message: 'err'});
    }

  }
}