"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _default = require('./routes/default'); var _default2 = _interopRequireDefault(_default);
var _expressejslayouts = require('express-ejs-layouts'); var _expressejslayouts2 = _interopRequireDefault(_expressejslayouts);

class App {

     constructor() {
        this.express = _express2.default.call(void 0, )
        this.middlewares()
        this.database()
        this.layout()

        this.defaultRoutes()
    }

    

     middlewares () {
        this.express.use(_express2.default.json())
        this.express.use(_express2.default.urlencoded({ extended: true}))
        this.express.use(_express2.default.static(__dirname+"\\public"))
    }

     database () {
        _mongoose2.default.Promise = global.Promise;
        _mongoose2.default.connect("mongodb+srv://lucas_cqn:goldship666@cluster0.xn84s.mongodb.net/CqnBank?retryWrites=true&w=majority")
    }

     layout (){
        this.express.use(_expressejslayouts2.default);
        this.express.set("views", __dirname+"\\views")
        this.express.set("layout", "./layouts/main");
        this.express.set("view engine", "ejs");
    }

     defaultRoutes () {
       this.express.use(_default2.default)
    }
}

exports. default = new App().express
