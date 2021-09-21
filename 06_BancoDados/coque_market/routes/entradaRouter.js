//Importando o express
    const express = require("express");
    const router = express.Router();

//Importando os controles de rota
    const entradaControl = require("../controllers/entradaController");

//Rotas
    //Entrada
        //Lista
            router.get("/lista", entradaControl.entradaLista)
        
        //Cadastro
            router.get("/add", entradaControl.entradaAddGet)
            router.post("/add", entradaControl.entradaAddPost)
/*
        //Editar
        router.get("/editar/:id", entradaControl.estoqueEditGet)
        router.post("/editar", entradaControl.estoqueEditPost) */

/*         //Deletar
        router.get("/drop/:id", entradaControl.entradaDrop)
 */


//Exportando as rotas
    module.exports = router