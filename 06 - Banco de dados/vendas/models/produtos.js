const mongoose = require("mongoose") //Chamando o módulo mongoose para a const mongoose
const Schema = mongoose.Schema;

const Produto = new Schema ({
    nome: {
        type: String,
        required: true
    }, 
    vlUnit: {
        type: Number,
        required: true
    },
    codigoBarras: {
        type: String,
        required: true
    } 
});

mongoose.model("produtos", Produto)