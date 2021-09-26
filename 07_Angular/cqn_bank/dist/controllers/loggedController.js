"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _usuarios = require('../models/usuarios'); var _usuarios2 = _interopRequireDefault(_usuarios);




var _storage = require('../helpers/storage'); var _storage2 = _interopRequireDefault(_storage);

class loggedControl {
     async userGet (req, res) {
        const id = _storage2.default.getItem('userId')
        const usuario = await _usuarios2.default.findOne({_id: id})
        return res.json(usuario)
    }
}

exports. default = new loggedControl()
