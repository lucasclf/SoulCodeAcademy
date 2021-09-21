//Importando o express
    const express = require("express");
    const router = express.Router();

//Importando os controles de rota
    const homeControl = require("../controllers/homeController");

//Rotas
    //Raiz
        router.get("/", homeControl.homeGet)
    /*     router.post("/login", homeControl.loginPost) */

//Exportando as rotas
module.exports = router