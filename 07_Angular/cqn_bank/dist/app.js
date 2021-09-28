"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Importação dos módulos
    var _express = require('express'); var _express2 = _interopRequireDefault(_express);
    var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
    var _defaultRoute = require('./routes/defaultRoute'); var _defaultRoute2 = _interopRequireDefault(_defaultRoute);
    var _loggedRoute = require('./routes/loggedRoute'); var _loggedRoute2 = _interopRequireDefault(_loggedRoute);
    var _expressejslayouts = require('express-ejs-layouts'); var _expressejslayouts2 = _interopRequireDefault(_expressejslayouts);

/**
 * Criação do objeto App.
 * Métodos:
 * @express - Contem o express(), necessário para a conexão com o express.
 * @middlewares - Define que as informações serão passadas por JSON e permite o
 * uso de arquivos estáticos.
 * @database - Define a conexão com o banco de dados (mongoDB) atraves do mongoose.
 * @layout - Define como as páginas ejs serão lidas.
 * @routes - Define as configurações de rota.
 * 
 * @author Lucas Coquenão Lemos Ferreira.
 * 
 */
    class App {

         constructor() {
            this.express = _express2.default.call(void 0, )
            this.middlewares()
            this.database()
            this.layout()
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

         routes () {
        this.express.use('/', _defaultRoute2.default)
        this.express.use('/user', _loggedRoute2.default)
        }
    }

//Exportação do objeto App() com o metodo express.
    exports. default = new App().express
