"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _defaultRoute = require('./routes/defaultRoute'); var _defaultRoute2 = _interopRequireDefault(_defaultRoute);
var _loggedRoute = require('./routes/loggedRoute'); var _loggedRoute2 = _interopRequireDefault(_loggedRoute);
var _expressejslayouts = require('express-ejs-layouts'); var _expressejslayouts2 = _interopRequireDefault(_expressejslayouts);
var _cookieparser = require('cookie-parser'); var _cookieparser2 = _interopRequireDefault(_cookieparser);
var _expresssession = require('express-session'); var _expresssession2 = _interopRequireDefault(_expresssession);




class App {

     constructor() {
        this.express = _express2.default.call(void 0, )
        this.middlewares()
        this.database()
        this.layout()
        this.session()

        this.routes()
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

     layout () {
        this.express.use(_expressejslayouts2.default);
        this.express.set("views", __dirname+"\\views")
        this.express.set("layout", "./layouts/main");
        this.express.set("view engine", "ejs");
    }

     session () {
        this.express.use(_cookieparser2.default.call(void 0, ));
        this.express.use(_expresssession2.default.call(void 0, {
            secret: 'CqnBank',
            resave: true,
            saveUninitialized: true
        }))
    }

     routes () {
       this.express.use('/', _defaultRoute2.default)
       this.express.use('/user', _loggedRoute2.default)
    }
}

exports. default = new App().express
