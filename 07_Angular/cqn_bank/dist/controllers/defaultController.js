"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _usuarios = require('../models/usuarios'); var _usuarios2 = _interopRequireDefault(_usuarios);
var _objetoUsuario = require('../models/objetoUsuario'); var _objetoUsuario2 = _interopRequireDefault(_objetoUsuario);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _storage = require('../helpers/storage'); var _storage2 = _interopRequireDefault(_storage);

//ROTA DO HOME

class defaultControl {

     homeGet (req, res){
        res.render('pages/index')
    }

     async listaGet (req, res) {
        const lista = await _usuarios2.default.find()
        return res.json(lista)
    }
    
     criarContaGet (req, res) {
        return res.render("pages/criarConta")
    }

     criarContaPost (req, res){
        let usuario = new (0, _objetoUsuario2.default)(req.body.nome, req.body.cpf, "A" + req.body.agencia +"C"+ req.body.conta, req.body.senha, req.body.saldo);

        usuario.cadastro(req, res)
    }

     loginGet (req, res) {
        res.render('pages/login')
    }
    
     async loginPost (req, res) {
        let cpf = req.body.cpf
        let senha = req.body.senha
        let user = await _usuarios2.default.findOne({cpf: cpf})
        _storage2.default.removeItem('token')
        _storage2.default.removeItem('userId')
        if(!user){
            return res.send("Usuário não encontrado")
        }

        if(!await _bcryptjs2.default.compare(senha, user.senha)){
            return res.send("Senha inválida")
        }
        
        const token = _jsonwebtoken2.default.sign({ id: user._id}, {
            "secret": "832374c92d8272d8c100bf63118bc3ac"
        }.secret, {
            expiresIn: 7200
        })

        _storage2.default.setItem('token', token)

        res.redirect('/user')
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