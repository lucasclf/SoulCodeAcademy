"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/**
 * Arquivo responsável por definir as ações de cada rota 
 * default(ver ../routes/defaultRoute).
 * @homeGet - Renderiza a página principal.
 * @listaGet - Rota de teste para exibir a lista de usuários do banco de dados.DELETAR!
 * @criarContaGet - Renderiza a página de registro de conta.
 * @criarContaPost - Cria um novo objeto usuario e utiliza o metodo cadastro.
 * @loginGet - Renderiza a página de login.
 * @loginPost - Reseta o storage, verifica se login e senha conferem com algum
 * usuário do banco de dados, gera um token deste usuário e armazena no storage
 * o token e o id desse usuário.
 * 
 */

//Importando módulos.
    
    var _usuarios = require('../models/usuarios'); var _usuarios2 = _interopRequireDefault(_usuarios);
    var _objetoUsuario = require('../models/objetoUsuario'); var _objetoUsuario2 = _interopRequireDefault(_objetoUsuario);
    var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
    var _storage = require('../helpers/storage'); var _storage2 = _interopRequireDefault(_storage);

//Criando class de defaultControl
    class defaultControl {
        
     homeGet (req, res){
        res.render('pages/index')
    }
    //DELETAR!
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

        console.log(user.senha)
        
        if(senha != user.senha){
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

//Exportando um novo objeto defaultControl.
    exports. default = new defaultControl()