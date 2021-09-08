// Importando o express
    const express = require("express");
    const router = express.Router();

// Importando o controle de livros
    const livrosController = require("../controllers/livros");

// Rotas
    router.get("/", livrosController.listar_livros);


module.exports = router