// Chamando módulos
const express = require("express");
const router = express.Router();
const mysql = require("mysql")

    // Criando o objeto de conexão
    const con = mysql.createConnection({
        host: "localhost",
        user: "user",
        password: "user",
        database: "biblioteca_cqn",
        debug: true
    }); 

// Definindo rotas
    //Rota da lista de livros
    router.get("/", (req, res) => {
        var listaLivros = 0;
        con.connect(function (err) {
            
            if (err) throw err;
            var sql = "SELECT * FROM livros";
            con.query(sql, function (err, result) {
                listaLivros = result;
                if (err) throw err;
            });
        });
        con.connect(function (err) {
            var resultado = 0;
            if (err) throw err;
            console.log("Conectado!");
            var sql = "SELECT * FROM Livros";
            con.query(sql, function (err, result) {
                resultado = result;
                console.log(resultado);
                if (err) throw err;
                console.log("dado inserido: " + sql);
            });
        });
            listaLivros.find({}, (err, dado) => {
                if (err) {
                    return res.status(500).send("Erro ao consultar livro!")
                }
                res.render("lista", { catalogoLivros: dado })
            })            
    });


/*         let consultaDB = Livro.find({}, (err, dado) => {
            if (err) {
                return res.status(500).send("Erro ao consultar livro!")
            }
            res.render("lista", { catalogoLivros: dado });
        })
    }); */
// Exportando rotas        
module.exports = router 