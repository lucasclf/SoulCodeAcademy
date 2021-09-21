// Importando o express
    const express = require("express");
    const router = express.Router();

// Importando os controles de rotas
    const userControl = require("../controllers/userControl");

// Rotas
    router.get("/", userControl.listar_livros);


module.exports = router