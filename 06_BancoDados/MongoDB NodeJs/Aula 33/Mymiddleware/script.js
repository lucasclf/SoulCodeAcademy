const express = require("express"); 
//CHAMANDO O MÓDULO EXPRESS.;
const app = express(); 
//CRIANDO UMA APP DO EXPRESS
const port = 3000;
//CRIANDO UMA CONSTANTE PARA A PORTA
const rota = require("./router")

app.use(rota)

//Usando a middleware express.static para acessar uma pasta public onde tem os arquivos statics.
/* app.use(express.static("public")) */ 

app.get("/", (req, res)=>{
    res.send("página principal.")
})

app.listen(port, ()=>{
    console.log("Servidor rodando na porta: "+port)
})

var myMiddleware = function(req, res, next){
    //Executa alguma operação
    next(); //Chama a próxima middleware
}