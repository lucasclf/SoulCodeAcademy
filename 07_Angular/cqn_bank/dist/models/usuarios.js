"use strict";Object.defineProperty(exports, "__esModule", {value: true});/**
 * Arquivo responsavel pela criação da interface de Usuario e do Modelo de 
 * usuário a ser usado pelo banco de dados.
 */

//Importação dos módulos
    var _mongoose = require('mongoose');

//Criação da interface do Usuário.
    







//Criação do modelo de Usuario a ser usado pelo banco de dados.
    const UsuarioSchema = new (0, _mongoose.Schema) ({
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        idBank: {
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
        },
        {timestamps: true
        })

//Exportação do modelo de usuario.
    exports. default = _mongoose.model('usuarios', UsuarioSchema)
