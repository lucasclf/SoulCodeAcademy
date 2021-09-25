"use strict";const MONGOOSE = require("mongoose")
const SCHEMA = MONGOOSE.Schema;

const USUARIOMODELO = new SCHEMA ({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    conta: {
        type: String,
        required: true
    },
    agencia:{
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    saldo: {
        type: Number,
        default: 0
    }
});

MONGOOSE.model("usuarios", USUARIOMODELO)
