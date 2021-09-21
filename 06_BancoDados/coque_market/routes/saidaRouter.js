//Importando o express
    const express = require("express");
    const router = express.Router();

//Importando os controles de rota
    const saidaControl = require("../controllers/saidaController");

//Rotas
    //Entrada
        //Lista
            router.get("/lista", saidaControl.saidaLista)
        
        //Cadastro
            router.get("/add", saidaControl.saidaAddGet)
            router.post("/add", saidaControl.saidaAddPost)
/*
        //Editar
        router.get("/editar/:id", saidaControl.saidaEditGet)
        router.post("/editar", saidaControl.saidaEditPost) */

/*         //Deletar
        router.get("/drop/:id", saidaControl.saidaDrop)
 */


//Exportando as rotas
    module.exports = router