const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController');

//Criar usuário
router.post("/users", UserController.createUser);
//Listar todos usuarios
router.get("/users", UserController.listUsers);
//Fazer login
router.post("/login", LoginController.login);
//Fazer logout
//Ver todas as fotos
//Likes em fotos
//Postar uma foto
//Deletar uma foto
//Editar descrição de foto
//Visualizar perfil de usuário
 
router.get("/", (req, res) => {return res.send("Hello")});

module.exports = router;