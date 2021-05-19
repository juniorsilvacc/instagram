const express = require('express');
const router = express.Router();

//Criar usuário
//Fazer login
//Fazer logout
//Ver todas as fotos
//Likes em fotos
//Postar uma foto
//Deletar uma foto
//Editar descrição de foto
//Visualizar perfil de usuário
 
router.get("/", (req, res) => {return res.send("Hello")});

module.exports = router;