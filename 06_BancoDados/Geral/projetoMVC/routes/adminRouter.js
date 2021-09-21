// Importando o express
    const { Router } = require("express");
    const express = require("express");
    const router = express.Router();

// Importando os controles de rotas
    const adminControl = require("../controllers/adminControl");

// Rotas
    //Raiz dos administradores
        router.get("/", adminControl.listar_livros);

    //Cadastro de livros
        router.get("/cadastrarLivro", adminControl.cadastrar_livro_get);
        router.post("/cadastrarLivro", adminControl.cadastrar_livro_post);

    //Edição de livros
        router.get("/editarLivro/:id", adminControl.editar_livro_get)
        router.post("/editarLivro", adminControl.editar_livro_post)

    //Deleção de livros
        router.get("/deletarLivro/:id", adminControl.deletar_livro)
    
module.exports = router