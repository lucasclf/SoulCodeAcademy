"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/**
 * Arquivo responsável pela criação de um LocalStorage para armazenar informações
 * de login.
 */

//Importação de módulo.
    var _nodelocalstorage = require('node-localstorage'); var _nodelocalstorage2 = _interopRequireDefault(_nodelocalstorage);

//Criação das variaveis utilizadas.
    //Constante responsavel por utilizar o método LocalStorage do módulo node-localstorage
        const LocalStorage = _nodelocalstorage2.default.LocalStorage

    //Variavel do tipo LocalStorage
        var storage

//Função responsável por criar um LocalStorage caso ele não exista.
    if (typeof storage === 'undefined' || storage === null){
        storage = new LocalStorage('./scratch')
    }

//Exportação do localStorage.
    exports. default = storage