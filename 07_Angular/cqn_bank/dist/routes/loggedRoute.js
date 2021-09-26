"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//IMPORTANDO O EXPRESSE E O ROUTER
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
    routes.get("/", _loggedController2.default.userGet);

    exports. default = routes