"use strict";Object.defineProperty(exports, "__esModule", {value: true});/* const mongoose = require("mongoose");
require("../models/usuarios");
const USUARIO = mongoose.model("usuarios"); */
/* const UsuarioObjeto = require("../models/objetoUsuario") */
/* import { Usuario } from "../models/objetoUsuario" */



//ROTA DO HOME

class defaultControl {

     homeGet (req, res){
        res.render('pages/index')
    }

}
/* exports.homeGet = (req: any, res: any) => {
    res.render("pages/index")
};

exports.criarContaGet = (req: any, res: any) => {
    res.render("pages/criarConta")
}

exports.criarContaPost = (req: any, res: any) => {
    let usuario = new Usuario(req.body.nome, req.body.cpf, req.body.conta, req.body.agencia, req.body.senha, req.body.saldo);

    usuario.cadastro(req, res);


    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let conta = req.body.conta;
    let agencia = req.body.agencia;
    let senha = req.body.senha;
    let saldo = req.body.saldo;

    Usuario.cadastro(nome, cpf, conta, agencia, senha, saldo)

        console.log(usuario)

} */

exports. default = new defaultControl()