"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/**
 * Arquivo responsável por definir as ações de cada rota 
 * logada(ver ../routes/loggedRoute).
 * @userGet - Acessa o id armazenado no storage e renderiza 
 * a página pessoal daquele usuário.
 * @depositoPost - Gera um objeto usuario e recebe as informações de deposito do 
 * front e envia para o metodo movimentação do objeto usuario gerado.
 * @saquePost - Gera um objeto usuario e recebe as informações de saque do 
 * front e envia para o metodo movimentação do objeto usuario gerado.
 * @transferirPost - Gera dois objetos usuario, um que irá transferir e outro que
 * irá receber, chama o metodo movimentação para reduzir o valor do primeiro usuario
 * e chama o metodo transferir para acrescentar o valor ao segundo usuario.
 * @logout - Limpa o storage e renderiza a página principal.
 * 
 */

//Importando módulos.
    
    var _usuarios = require('../models/usuarios'); var _usuarios2 = _interopRequireDefault(_usuarios);
    var _objetoUsuario = require('../models/objetoUsuario'); var _objetoUsuario2 = _interopRequireDefault(_objetoUsuario);
    var _storage = require('../helpers/storage'); var _storage2 = _interopRequireDefault(_storage);

//Criação da classe loggedControl
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

         async logout(req, res) {
            _storage2.default.removeItem('userId')
            _storage2.default.removeItem('token')
            res.redirect('/')
        }
    }

//Exportação de um novo objeto loggedControl
    exports. default = new loggedControl()
