const mysql = require("mysql"); // Importando o mysql para dentro da const mongoose

// mySql
        // Criando o objeto de conexão
        const con = mysql.createConnection({
            host: "localhost",
            user: "user",
            password: "user",
            database: "shopping_cqn",
            debug: true
        }); 

        // Conectando ao servidor
        const connect = con.connect(function (err) {
            if (err){
                throw err;
            }
            console.log("Conectado!");
        });

module.exports = connect