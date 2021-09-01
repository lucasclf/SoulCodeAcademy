const express = require("express"); 
const rota = express.Router(); //CRIANDO O OBJETO ROUTER

rota.get("/", (req,res)=>{
    res.send("Home")
})

rota.get("/cadastro", (req,res)=>{
    res.send("Página de cadastro")
})

module.exports = rota //EXPORTANDO A CONST ROTA PARA PODER USA-LA EM OUTROS SCRIPTS