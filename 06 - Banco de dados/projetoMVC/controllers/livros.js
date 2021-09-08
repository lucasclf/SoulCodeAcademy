const Livro = require("../models/livros")

//Rota de listagem de livros
    exports.listar_livros = (req, res) => {
        Livro.find({}, (err, dado) => {
            if (err) {
                return res.status(500).send("Erro ao consultar livro!")
            }
            res.render("./pages/lista", { catalogoLivros: dado });
        })
    };