// Chamando módulos
const express = require("express");
const router = express.Router();
const mysql = require("mysql"); // Importando o mongoose para dentro da const 

const con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user",
    database: "biblioteca_cqn"
});

// Definindo rotas
    //Rota da lista de livros
    router.get("/", (req, res) => {
    /*      let consultaDB = Livro.find({}, (err, dado) => {
            if (err) {
                return res.status(500).send("Erro ao consultar livro!")
            }
            res.render("lista", { catalogoLivros: dado });
        }) */
        var sql = "SELECT * FROM livros";
        con.query(sql, function (err, rows) {
            if (err) throw err;
            res.render("lista", {livros_lista: rows})
        });
        
    });
    
// Exportando rotas        
module.exports = router