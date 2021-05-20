const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController');
const PostController = require('../controllers/PostController');


router.post("/users", UserController.createUser);
router.get("/users", UserController.listUsers);

router.post("/login", LoginController.login);

router.post("/posts", PostController.createPost);
router.get("/posts", PostController.listAllPosts);
router.delete("/posts/:post_id", PostController.deletePost);
router.put("/posts/:post_id", PostController.editPost);

//Fazer logout
//Likes em fotos
//Deletar uma foto
//Editar descrição de foto
//Visualizar perfil de usuário
 
router.get("/", (req, res) => {return res.send("Hello")});

module.exports = router;