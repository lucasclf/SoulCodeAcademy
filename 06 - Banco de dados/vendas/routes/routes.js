// Chamando módulos
    const express = require("express");
    const router = express.Router();
    const mongoose = require("mongoose");
    require("../models/produtos");
    const Produto = mongoose.model("produtos");

// Configurando rotas
    // Rota raiz
        router.get("/", (req, res) => {
            res.render("produtos");
        });

    //Rota de lista de produtos
        router.get("/produtos", (req, res) => {
            let consultaDB = Produto.find({}, (err, dado) => {

                if (err) {
                    return res.status(500).send("Erro ao consultar produto!")
                }
                res.render("produtos", { catalogoProdutos: dado });

            })
        });
    // Rotas de cadastro de produtos
        router.get("/cadastrarProdutos", (req, res) => {
            res.render("formprodutos");
        })

        router.post("/cadastrarProdutos", (req, res) => {
            let produto = new Produto();
            produto.nome = req.body.nome;
            produto.vlUnit = req.body.valor;
            produto.codigoBarras = req.body.codBarras;

            produto.save((err) => {
                if (err)
                    return res.status(500).send("Erro ao cadastrar!")
                return res.redirect("/produtos")
            })
        })
 
    // Rota de deletar produtos
        router.get("/deletarProduto/:id", (req, res) => {
            let chave = req.params.id;
            Produto.deleteOne({ _id: chave }, (err, result) => {
                if (err) {
                    return res.status(500).send("Falha ao deletar.")
                }
            });
            res.send("<script>alert('Produto deletado com sucesso.'); window.location.href = '/produtos'; </script>");
        })

    // Rotas de edição de produtos
        router.get("/editarProduto/:id", (req, res) => {
            Produto.findById(req.params.id, (err, produto) => {
                if (err)
                    return res.status(500).send("Erro ao consultar produto"+err);
                res.render("formEditarproduto", { produto_item: produto })
            });
        });

        router.post("/editarProduto", (req, res) => {
            var id = req.body.id
            Produto.findById(id, (err, produto) => {
                if (err) {
                    return res.status(500).send("Erro ao consultar produto.")
                }
                produto.nome = req.body.nome
                produto.vlUnit = req.body.valor
                produto.codigoBarras = req.body.codBarras

                produto.save(err => {
                    if (err) {
                        console.log("nome "+produto.nome+":"+req.body.nome+" valor "+produto.vlUnit+":"+req.body.valor+" código de barras"+produto.codigoBarras+":"+req.body.cadBarras)
                        return res.status(500).send("Erro ao salvar produto.")
                    }
                    return res.redirect("/produtos")
                })
            })
        })

// Exportando rotas        
    module.exports = router        