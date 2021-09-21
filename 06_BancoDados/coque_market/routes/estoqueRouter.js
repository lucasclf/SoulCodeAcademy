//Importando o express
    const express = require("express");
    const router = express.Router();

//Importando os controles de rota
    const estoqueControl = require("../controllers/estoqueController");

//Rotas
    //Fornecedores
        //Lista
        router.get("/lista", estoqueControl.estoqueLista)
 
        //Editar
        router.get("/editar/:id", estoqueControl.estoqueEditGet)
        router.post("/editar", estoqueControl.estoqueEditPost)

        //Deletar
        router.get("/drop/:id", estoqueControl.estoqueDrop)

        //Cadastro
        router.get("/add", estoqueControl.estoqueAddGet)
        router.post("/add", estoqueControl.estoqueAddPost)

//Exportando as rotas
module.exports = router