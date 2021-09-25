import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import routes from './routes/default'
import layouts from 'express-ejs-layouts'

class App {

    public constructor() {
        this.express = express()
        this.middlewares()
        this.database()
        this.layout()

        this.defaultRoutes()
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

    private layout (): void{
        this.express.use(layouts);
        this.express.set("views", __dirname+"\\views")
        this.express.set("layout", "./layouts/main");
        this.express.set("view engine", "ejs");
    }

    private defaultRoutes (): void {
       this.express.use(routes)
    }
}

export default new App().express
