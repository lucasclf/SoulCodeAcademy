"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _usuarios = require('./usuarios'); var _usuarios2 = _interopRequireDefault(_usuarios);

var _storage = require('../helpers/storage'); var _storage2 = _interopRequireDefault(_storage);


class Usuario {

    
    
    
    
    

    constructor(nome, cpf, idBank, senha, saldo) {
        this.NOME = nome;
        this.CPF = cpf;
        this.IDBANK = idBank;
        this.SENHA = senha;
        this.SALDO = saldo;
    }

    async movimentacao(req, res){
        const id = _storage2.default.getItem('userId')
        let user = await _usuarios2.default.findById(id)
        user.nome = this.NOME;
        user.cpf = this.CPF;
        user.idBank = this.IDBANK;
        user.senha = this.SENHA;
        user.saldo = this.SALDO
        user.save((err) => {
        })
        
        return await res.redirect('/user/')
    }

    async transferencia(id) {
        let user = await _usuarios2.default.findById(id)
        user.nome = this.NOME;
        user.cpf = this.CPF;
        user.idBank = this.IDBANK;
        user.senha = this.SENHA;
        user.saldo = this.SALDO
        user.save((err) => {
        })
    } 

    cadastro(req, res) {
        let user = new (0, _usuarios2.default)();
        user.nome = this.NOME;
        user.cpf = this.CPF;
        user.idBank = this.IDBANK;
        user.senha = this.SENHA;
        user.saldo = this.SALDO;

        user.save((err) => {
        })

        res.redirect("/lista")

    }

}

exports. default = Usuario