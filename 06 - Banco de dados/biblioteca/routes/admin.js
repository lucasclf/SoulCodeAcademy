// Chamando módulos
    const express = require("express");
    const router = express.Router();
    const mongoose = require("mongoose");
    require("../models/livros");
    const Livro = mongoose.model("livros");

// Definindo rotas
    // Rota de cadastro
        router.get("/cadastrar", (req, res) => {
            res.render("cadastrar");
        });

        router.post("/cadastrar", (req, res) => {
            let livro = new Livro();
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
            })
        })

//Rota de lista do admin
    router.get("/lista", (req, res) => {
        let consultaDB = Livro.find({}, (err, dado) => {
            if (err) {
                return res.status(500).send("Erro ao consultar livro!")
            }
            res.render("listaAdmin", { catalogoLivros: dado });
        })
    });

//Rota de deletar
    router.get("/deletarLivro/:id", (req, res) => {
        let id = req.params.id;
        Livro.deleteOne({ _id: id }, (err, result) => {
            if (err) {
                return res.status(500).send("Falha ao deletar.")
            }
        });
        res.send("<script>alert('Livro deletado com sucesso.'); window.location.href = '/admin/lista'; </script>");
    })

// Rotas de edição de produtos
    router.get("/editarLivro/:id", (req, res) => {
        Livro.findById(req.params.id, (err, livro) => {
            if (err)
                return res.status(500).send("Erro ao consultar livro" + err);
            res.render("editarLivro", { livro_item: livro })
        });
    });

    router.post("/editarlivro", (req, res) => {
        var id = req.body.id
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
        })
    })

// Exportando rotas        
module.exports = router
