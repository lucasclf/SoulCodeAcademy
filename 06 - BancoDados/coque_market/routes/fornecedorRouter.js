//Importando o express
    const express = require("express");
    const router = express.Router();

//Importando os controles de rota
    const fornecedorControl = require("../controllers/fornecedorController");

//Rotas
    //Fornecedores
        //Lista
        router.get("/lista", fornecedorControl.fornecedorLista)

        //Editar
        router.get("/editar/:id", fornecedorControl.fornecedorEditGet)
        router.post("/editar", fornecedorControl.fornecedorEditPost)

        //Deletar
        router.get("/drop/:id", fornecedorControl.fornecedorDrop)

        //Cadastro
        router.get("/add", fornecedorControl.fornecedorAddGet)
        router.post("/add", fornecedorControl.fornecedorAddPost)

//Exportando as rotas
module.exports = router