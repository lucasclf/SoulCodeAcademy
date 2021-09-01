const express = require("express"); 
//CHAMANDO O MÓDULO EXPRESS.;
const app = express(); 
//CRIANDO UMA APP DO EXPRESS
const port = 3000;
//CRIANDO UMA CONSTANTE PARA A PORTA
const rota = require("./router")

app.use(rota)

app.listen(port, ()=>{
    console.log("Servidor rodando na porta: "+port)
})