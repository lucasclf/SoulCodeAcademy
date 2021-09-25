import { Mongoose } from "mongoose"

//CHAMANDO OS MÓDULOS
    const EXPRESS = require("express");
    const APP = EXPRESS();
    const MONGOOSE = require("mongoose");
    const LAYOUTS = require("express-ejs-layouts");
    const COOKIE = require("cookie-parser");
    const SESSION = require("express-session");
    const FLASH = require("req-flash");
    const PASSPORT = require("passport");

//IMPORTANDO AS ROTAS
    const DEFAULTROUTER = require("./routes/default");

//CONFIGURAÇÕES
    //CRIANDO PORTA
        const PORT = 4242;

    //MONGOOSE
        MONGOOSE.Promise = global.Promise;
        MONGOOSE.connect("mongodb+srv://lucas_cqn:goldship666@cluster0.xn84s.mongodb.net/CqnBank?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

    //EJS
        APP.use(LAYOUTS);
        APP.set("layout", "./layouts/main");
        APP.set("view engine", "ejs");

    //EXPRESS
        APP.use(EXPRESS.json());
        APP.use(EXPRESS.urlencoded({ extended: true}));

    //PERMITIR ARQUIVOS ESTÁTICOS
        APP.use(EXPRESS.static("public"));

    //COOKIEPARSER
        APP.use(COOKIE());

    //SESSION
        APP.use(SESSION({
            secret: 'CqnBank',
            resave: true,
            saveUninitialized: true
        }));
        APP.use(PASSPORT.initialize());
        APP.use(PASSPORT.session());

    //REQ-FLASH
        APP.use(FLASH());
        APP.use((req: any, res: any, next: any) => {
            res.locals.success_msg = req.flash("success_msg")
            res.locals.error_msg = req.flash("error_msg")
            res.locals.user = req.user || null
            next()
        });

    //ROTAS
        APP.use("/", DEFAULTROUTER);

    //EVENTO DE ESCUTA
        APP.listen((process.env.PORT || PORT), () => {
            console.log("Banco de dados rodando na porta: " + PORT);
        });