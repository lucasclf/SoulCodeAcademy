"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/**
 * Arquivo de rotas padrões, utilizadas caso o usuário esteja deslogado.
 * @defaultControl - Importação do arquivo controller responsavel pelas
 * rotas deslogadas.
 */

//IMPORTANDO O EXPRESSE E O ROUTER
    var _express = require('express');
    const routes = _express.Router.call(void 0, )

//IMPORTANDO O CONTROLLER
    var _defaultController = require('../controllers/defaultController'); var _defaultController2 = _interopRequireDefault(_defaultController);

//ROTAS
    //RAIZ
        routes.get("/", _defaultController2.default.homeGet);

    //LISTA
        routes.get("/lista", _defaultController2.default.listaGet)

    //CADASTRAR
        routes.get("/criarConta", _defaultController2.default.criarContaGet);
        routes.post("/criarConta", _defaultController2.default.criarContaPost);

    //LOGIN
        routes.get("/login", _defaultController2.default.loginGet)
        routes.post("/login", _defaultController2.default.loginPost)

//Exportação das rotas.        
    exports. default = routes