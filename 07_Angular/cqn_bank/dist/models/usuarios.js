"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose');
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);










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

    UsuarioSchema.pre('save', async function(next) {
        const hash = await _bcryptjs2.default.hash(this.senha, 10)
        this.senha = hash
    })

exports. default = _mongoose.model('usuarios', UsuarioSchema)
