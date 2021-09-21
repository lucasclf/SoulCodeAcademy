const mongoose = require("mongoose");

const Livro = mongoose.model("livros", {
    nome: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    }, 
    faixaEtaria: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    ano: {
        type: String,
        required: true
    },
    local: {
        type: String,
        required: true
    }
})

module.exports = Livro