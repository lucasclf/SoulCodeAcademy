/* var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Ola Mundo, tudo certo?");

}).listen(8000);

console.log("Server on na porta 8000") */

var express = require("express")
const app = express()

app.get("/", function(req, res) {
    res.send("Olá express!");
})

app.listen(3000, ()=>{
    console.log("Rodando na porta 3000!");
})
