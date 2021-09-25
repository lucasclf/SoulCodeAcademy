"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _usuarios = require('../models/usuarios'); var _usuarios2 = _interopRequireDefault(_usuarios);
var _objetoUsuario = require('../models/objetoUsuario'); var _objetoUsuario2 = _interopRequireDefault(_objetoUsuario);

//ROTA DO HOME

class defaultControl {

     homeGet (req, res){
        res.render('pages/index')
    }

     async listaGet (req, res){
        const lista = await _usuarios2.default.find()
        return res.json(lista)
    }

     criarContaGet (req, res) {
        return res.render("pages/criarConta")
    }

     criarContaPost (req, res){
        let usuario = new (0, _objetoUsuario2.default)(req.body.nome, req.body.cpf, req.body.conta, req.body.agencia, req.body.senha, req.body.saldo);

        usuario.cadastro(req, res)
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