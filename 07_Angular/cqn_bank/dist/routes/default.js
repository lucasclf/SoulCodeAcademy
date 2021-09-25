"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//IMPORTANDO O EXPRESSE E O ROUTER
    var _express = require('express');
    const routes = _express.Router.call(void 0, )

//IMPORTANDO O CONTROLLER
    var _defaultController = require('../controllers/defaultController'); var _defaultController2 = _interopRequireDefault(_defaultController);

//ROTAS
    //RAIZ
        routes.get("/", _defaultController2.default.homeGet);

    //CADASTRAR
        /* routes.get("/criarconta", defaultControl.criarContaGet);
        routes.get("/criarconta", defaultControl.criarContaPost); */

exports. default = routes