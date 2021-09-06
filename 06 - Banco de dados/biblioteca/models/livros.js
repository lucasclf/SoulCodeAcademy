const mongoose = require("mongoose") //Chamando o módulo mongoose para a const mongoose
const Schema = mongoose.Schema;

const Livro = new Schema ({
    nome: {
        type: String,
        required: true
    }, 
    cdd: {
        type: Number,
        required: true
    },
    lcc: {
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
        type: Number,
        required: true
    },
    local: {
        type: String,
        required: true
    }
});

mongoose.model("livros", Livro)