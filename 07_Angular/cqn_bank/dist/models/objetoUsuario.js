"use strict";Object.defineProperty(exports, "__esModule", {value: true});const mongoose = require("mongoose");
require("./usuarios");
const USUARIO = mongoose.model("usuarios");

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
        let user = new USUARIO();
        user.nome = this.NOME;
        user.cpf = this.CPF;
        user.conta = this.CONTA;
        user.agencia = this.AGENCIA;
        user.senha = this.SENHA;
        user.saldo = this.SALDO;

        user.save((err) => {
        })

        res.send("Cadastro bem sucedido")

    }

} exports.Usuario = Usuario;