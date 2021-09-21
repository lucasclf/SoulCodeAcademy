// Chamando módulos
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/livros");
const Livro = mongoose.model("livros");

// Definindo rotas
    //Rota da lista de livros
    router.get("/", (req, res) => {
        let consultaDB = Livro.find({}, (err, dado) => {
            if (err) {
                return res.status(500).send("Erro ao consultar livro!")
            }
            res.render("lista", { catalogoLivros: dado });
        })
    });
    
// Exportando rotas        
module.exports = router 