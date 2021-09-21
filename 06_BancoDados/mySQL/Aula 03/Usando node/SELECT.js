var mysql = require("mysql"); //Chamando o modulo do mysql para dentro do seu .js

var con = mysql.createConnection({ 
    host: "localhost",
    user: "user",
    password: "user",
    database: "shopping_cqn",
    debug: true
}); //Criando um objeto chamando "con" com as informações de conexão

con.connect(function (err) { // Testando a conexão do sistema.
    var resultado = 0;
    if (err) throw err;
    console.log("Conectado!");
    var sql = "SELECT * FROM alunos"; //Criando uma variavel com a query que tu quer enviar
    con.query(sql, function (err, result) { //Enviando a query para o mySql.
        resultado = result;
        console.log(resultado);
        if (err) throw err;
        console.log("dado inserido: " + sql);
    });
});