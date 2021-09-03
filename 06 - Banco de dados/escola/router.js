const express = require("express"); //Chamando o módulo express
const rota = express.Router(); //Criando o objeto de rota

/* criando a rota raiz */
rota.get("/", (req,res)=>{
    res.render("index");
});

/* criando a rota /cadastroProfessor */
rota.get("/cadastroProfessor", (req, res)=>{
    res.render("cadastroProfessor");
});

/* criando a rota /cadastroAluno */
rota.get("/cadastroAluno", (req, res)=>{
    res.render("cadastroAluno");
});

/* criando a rota para /cadastro */
rota.get("/cadastro", (req, res)=>{
    res.render("cadastro");
});

module.exports = rota //EXPORTANDO A CONST ROTA PARA PODER USA-LA EM OUTROS SCRIPTS