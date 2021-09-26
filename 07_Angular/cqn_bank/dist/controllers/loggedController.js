"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _usuarios = require('../models/usuarios'); var _usuarios2 = _interopRequireDefault(_usuarios);
var _objetoUsuario = require('../models/objetoUsuario'); var _objetoUsuario2 = _interopRequireDefault(_objetoUsuario);



var _storage = require('../helpers/storage'); var _storage2 = _interopRequireDefault(_storage);

class loggedControl {
     userGet(req, res) {
        const id = _storage2.default.getItem('userId')
        _usuarios2.default.findById(id, (err, user) => {
            if (err) {
                return res.status(500).send("Erro ao consultar usuario" + err);
            }

            return res.render('pages/usuario', { userInfo: user })
        })
    }

     async depositoPost(req, res) {
        const id = _storage2.default.getItem('userId')
        const user = await _usuarios2.default.findById(id)

        let deposito = parseFloat(req.body.valorDeposito)
        console.log('deposito no controler', deposito)
        let usuario = new (0, _objetoUsuario2.default)(user.nome, user.cpf, user.idBank, user.senha, user.saldo + deposito)

        usuario.movimentacao(req, res)

    }

     async saquePost(req, res) {
        const id = _storage2.default.getItem('userId')
        const user = await _usuarios2.default.findById(id)

        let deposito = parseFloat(req.body.valorSaque)
        console.log('deposito no controler', deposito)
        let usuario = new (0, _objetoUsuario2.default)(user.nome, user.cpf, user.idBank, user.senha, user.saldo - deposito)

        usuario.movimentacao(req, res)

    }

     async transferirPost(req, res) {
        const id = _storage2.default.getItem('userId')
        const cpf = req.body.contaTransferir
        const user = await _usuarios2.default.findById(id)
        const alvo = await _usuarios2.default.findOne({cpf: cpf})

        let deposito = parseFloat(req.body.valorTranferir)
        console.log('deposito no controler', deposito)
        let usuario = new (0, _objetoUsuario2.default)(user.nome, user.cpf, user.idBank, user.senha, user.saldo - deposito)
        let usuarioAlvo = new (0, _objetoUsuario2.default)(alvo.nome, alvo.cpf, alvo.idBank, alvo.senha, alvo.saldo + deposito)

        await usuarioAlvo.transferencia(alvo._id)
        await usuario.movimentacao(req, res)

    }
}

exports. default = new loggedControl()
