"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _nodelocalstorage = require('node-localstorage'); var _nodelocalstorage2 = _interopRequireDefault(_nodelocalstorage);
const LocalStorage = _nodelocalstorage2.default.LocalStorage
var storage

if (typeof storage === 'undefined' || storage === null){
    storage = new LocalStorage('./scratch')
}

exports. default = storage