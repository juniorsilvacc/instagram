const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController');
const PostController = require('../controllers/PostController');
const ProfileController = require('../controllers/ProfileController');
const LikeController = require('../controllers/LikeController');


router.post("/users", UserController.createUser);
router.get("/users", UserController.listUsers);

router.post("/login", LoginController.login);

router.post("/posts", PostController.createPost);
router.get("/posts", PostController.listAllPosts);
router.delete("/posts/:post_id", PostController.deletePost);
router.put("/posts/:post_id", PostController.editPost);

router.get("/users/:user_id", ProfileController.listProfile);

router.post("/posts/:post_id/like", LikeController.likePost);
router.post("/posts/:post_id/deslike", LikeController.deslikePost);

router.get("/", (req, res) => {
  return res.send({message: 'Hello'})
})

module.exports = router;