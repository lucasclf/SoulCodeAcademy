"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');










const UsuarioSchema = new (0, _mongoose.Schema) ({
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

exports. default = _mongoose.model('usuarios', UsuarioSchema)
