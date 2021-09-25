"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _usuarios = require('./usuarios'); var _usuarios2 = _interopRequireDefault(_usuarios);


class Usuario {

    
    
    
    
    
    

    constructor(nome, cpf, conta, agencia, senha, saldo) {
        this.NOME = nome;
        this.CPF = cpf;
        this.CONTA = conta;
        this.AGENCIA = agencia;
        this.SENHA = senha;
        this.SALDO = saldo;
    }

/*      saldo(){

    }

    transferir(){

    } */

    cadastro(req, res) {
        let user = new (0, _usuarios2.default)();
        user.nome = this.NOME;
        user.cpf = this.CPF;
        user.conta = this.CONTA;
        user.agencia = this.AGENCIA;
        user.senha = this.SENHA;
        user.saldo = this.SALDO;

        user.save((err) => {
        })

        res.redirect("/listaGet")

    }

}

exports. default = Usuario