const Livro = require("../models/livros")

//Rota de listagem de livros
    exports.listar_livros = (req, res) => {
        Livro.find({}, (err, dado) => {
            if (err) {
                return res.status(500).send("Erro ao consultar livro!")
            }
            res.render("pages/listaAdmin", { catalogoLivros: dado });
        })
    };

// Rota de cadastro
    exports.cadastrar_livro_get = (req, res) => {
        res.render("pages/cadastrar");
    };

    exports.cadastrar_livro_post = (req, res) => {
        let livro = new Livro();
        livro.nome = req.body.nome;
        livro.cdd = req.body.cdd;
        livro.isbn = req.body.isbn;
        livro.faixaEtaria = req.body.faixaEtaria;
        livro.autor = req.body.autor;
        livro.ano = req.body.ano;
        livro.local = req.body.local;

        livro.save((err) => {
            if (err)
                return res.status(500).send("Erro ao cadastrar!")
            res.redirect("/admin")
        })
    }
//Rota de deletar livro
    exports.deletar_livro = (req, res) => {
        let id = req.params.id;
            Livro.deleteOne({ _id: id }, (err, result) => {
                if (err) {
                    return res.status(500).send("Falha ao deletar.")
                }
            });
            res.send("<script>alert('Livro deletado com sucesso.'); window.location.href = '/admin'; </script>");
    }

//Rota de editar livro
    exports.editar_livro_get = (req, res) => {
        Livro.findById(req.params.id, (err, livro) => {            
            if (err)
                return res.status(500).send("Erro ao consultar livro" + err);
            res.render("pages/editarLivro", { livro_item: livro})
        });
    }

    exports.editar_livro_post = (req, res) => {
        var id = req.body.id
        Livro.findById(id, (err, livro) => {
            if (err) {
                return res.status(500).send("Erro ao consultar livro.")
            }
            livro.nome = req.body.nome;
            livro.cdd = req.body.cdd;
            livro.isbn = req.body.isbn;
            livro.faixaEtaria = req.body.faixaEtaria;
            livro.autor = req.body.autor;
            livro.ano = req.body.ano;
            livro.local = req.body.local;

            livro.save(err => {
                if (err) {
                    return res.status(500).send("Erro ao salvar livro.")
                }
                return res.redirect("/admin")
            })
        })
    }