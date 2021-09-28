"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/**
 * Arquivo de rotas logado, utilizadas caso o usuário esteja logado.
 * @authMiddleware - Middleware de autenticação, que verifica se 
 * o usuário está logado.
 * @loggedControl - Importação do arquivo controller responsavel pelas
 * rotas deslogadas.
 * 
 */

//IMPORTANDO O EXPRESSE E O ROUTER
    var _express = require('express');
    const routes = _express.Router.call(void 0, )

//IMPORTANDO O CONTROLLER
    var _loggedController = require('../controllers/loggedController'); var _loggedController2 = _interopRequireDefault(_loggedController);

//IMPORTANDO OS MIDDLEWARE
    var _permissions = require('../helpers/permissions'); var _permissions2 = _interopRequireDefault(_permissions);

//DECLARANDO O USO DO MIDDLEWARE DE AUTENTICAÇÃO
    routes.use(_permissions2.default)

//ROTAS 
    //AREA DE USUÁRIO
        routes.get('/', _loggedController2.default.userGet);

    //DEPOSITO
        routes.post('/deposito', _loggedController2.default.depositoPost)

    //SAQUE
        routes.post('/saque', _loggedController2.default.saquePost)

    //TRANSFERÊNCIA
        routes.post('/transferir', _loggedController2.default.transferirPost)

    //LOGOUT
        routes.get('/logout', _loggedController2.default.logout)

//Exportação das rotas.
    exports. default = routes