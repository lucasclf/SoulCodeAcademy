// Importação dos módulos
    import express from 'express'
    import mongoose from 'mongoose'
    import defaultRoutes from './routes/defaultRoute'
    import loggedRoutes from './routes/loggedRoute'
    import layouts from 'express-ejs-layouts'

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

        public constructor() {
            this.express = express()
            this.middlewares()
            this.database()
            this.layout()
            this.routes()
        }
    
        public express: express.Application

        private middlewares (): void {
            this.express.use(express.json())
            this.express.use(express.urlencoded({ extended: true}))
            this.express.use(express.static(__dirname+"\\public"))
        }

        private database (): void {
            mongoose.Promise = global.Promise;
            mongoose.connect("mongodb+srv://lucas_cqn:goldship666@cluster0.xn84s.mongodb.net/CqnBank?retryWrites=true&w=majority")
        }

        private layout (): void {
            this.express.use(layouts);
            this.express.set("views", __dirname+"\\views")
            this.express.set("layout", "./layouts/main");
            this.express.set("view engine", "ejs");
        }

        private routes (): void {
        this.express.use('/', defaultRoutes)
        this.express.use('/user', loggedRoutes)
        }
    }

//Exportação do objeto App() com o metodo express.
    export default new App().express
