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
    // Rota de cadastro
        router.get("/cadastrar", (req, res) => {
            res.render("cadastrar");
        });

        router.post("/cadastrar", (req, res) => {
            livronome = req.body.nome;
            livroautor = req.body.autor;
            livroisbn = req.body.isbn;

        var sql = `INSERT INTO livros(nome_livro, autor_livro, isbn_livro) VALUES('${livronome}', '${livroautor}', '${livroisbn}')`;
        con.query(sql, function(err, result){
        if(err) throw err;
        });
        return res.redirect("/admin/lista");
            /* let livro = new Livro();
            livro.nome = req.body.nome;
            livro.cdd = req.body.cdd;
            livro.lcc = req.body.lcc;
            livro.faixaEtaria = req.body.faixaEtaria;
            livro.autor = req.body.autor;
            livro.ano = req.body.ano;
            livro.local = req.body.local;

            livro.save((err) => {
                if (err)
                    return res.status(500).send("Erro ao cadastrar!")
                return res.redirect("/admin/lista")
            }) */
        })

//Rota de lista do admin
    router.get("/lista", (req, res) => {
        var sql = "SELECT * FROM livros";
        con.query(sql, function (err, rows) {
            if (err) throw err;
            res.render("listaAdmin", {livros_lista: rows})
/*         let consultaDB = Livro.find({}, (err, dado) => {
            if (err) {
                return res.status(500).send("Erro ao consultar livro!")
            }
            res.render("listaAdmin", { catalogoLivros: dado });
        }) */
        });
    });

//Rota de deletar
    router.get("/deletarLivro/:id", (req, res) => {
        var id = req.params.id
        var sql = `DELETE FROM livros WHERE id_livro = '${id}'`;
        con.query(sql, function (err, rows) {
            if (err) throw err;
        res.send("<script>alert('Livro deletado com sucesso.'); window.location.href = '/admin/lista'; </script>");
        });    
        /* let id = req.params.id;
            Livro.deleteOne({ _id: id }, (err, result) => {
                if (err) {
                    return res.status(500).send("Falha ao deletar.")
                }
            });
            res.send("<script>alert('Livro deletado com sucesso.'); window.location.href = '/admin/lista'; </script>"); */
    })

// Rotas de edição de produtos
    router.get("/editarLivro/:id", (req, res) => {
        var id = req.params.id
        var sql = `SELECT * FROM livros WHERE id_livro = '${id}'`;
        con.query(sql, function (err, rows) {
            if (err) throw err;
            res.render("editarLivro", {livros_lista: rows[0]})
            console.log("TESTE"+rows[0])
/*         Livro.findById(req.params.id, (err, livro) => {
            if (err)
                return res.status(500).send("Erro ao consultar livro" + err);
            res.render("editarLivro", { livro_item: livro })*/
        }); 
    });

    router.post("/editarlivro", (req, res) => {
        livronome = req.body.nome;
        livroautor = req.body.autor;
        livroisbn = req.body.isbn;
        id = req.body.id
        
        var sql = `UPDATE livros SET nome_livro = "${livronome}", isbn_livro = "${livroisbn}", autor_livro = "${livroautor}" WHERE id_livro = '${id}'`;
        con.query(sql, function(err, result){
        if(err) throw err;
        });
        return res.redirect("/admin/lista");
        
        /* var id = req.body.id
        Livro.findById(id, (err, livro) => {
            if (err) {
                return res.status(500).send("Erro ao consultar livro.")
            }
            livro.nome = req.body.nome;
            livro.cdd = req.body.cdd;
            livro.lcc = req.body.lcc;
            livro.faixaEtaria = req.body.faixaEtaria;
            livro.autor = req.body.autor;
            livro.ano = req.body.ano;
            livro.local = req.body.local;

            livro.save(err => {
                if (err) {
                    return res.status(500).send("Erro ao salvar livro.")
                }
                return res.redirect("/admin/lista")
            })
        }) */
    })

// Exportando rotas        
module.exports = router