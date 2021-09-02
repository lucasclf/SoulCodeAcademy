const express = require("express"); //Chamando o módulo express
const rota = express.Router(); //Criando o objeto de rota

/* criando a rota raiz */
rota.get("/", (req,res)=>{
    res.render("index");
});

/* criando a rota /cadastro */
rota.get("/cadastro", (req, res)=>{
    res.render("cadastro");
});

/* criando a rota /lista */
/* rota.get("/lista", (req,res)=>{
    res.render("lista");
}); */

module.exports = rota //EXPORTANDO A CONST ROTA PARA PODER USA-LA EM OUTROS SCRIPTS