//Chamada dos módulos
    const express = require("express");
    const app = express();
    const expressLayouts =require("express-ejs-layouts");
    const cookieParser = require('cookie-parser');
    const session = require('express-session');
    const flash = require('req-flash');
    const con = require("./config/conect.js");
    const homeRouter = require("./routes/homeRouter.js")
    const fornecedorRouter = require("./routes/fornecedorRouter.js");
    const estoqueRouter = require("./routes/estoqueRouter.js")
    const entradaRouter = require("./routes/entradaRouter.js")
    const saidaRouter = require("./routes/saidaRouter.js")
    const { application } = require("express");

//Configurações
    //Definindo porta
        const port = 4242; // Definindo a porta.
    
    // EJS
        app.use(expressLayouts) //Informando o uso do expressLayouts
        app.set("layout", "./layouts/main") //Informando a pasta de layouts
        app.set("view engine", "ejs"); //Informando o motor de vizualição.

    // Express
        app.use(express.json()); // Definindo que os arquivos sejam enviados via JSON.
        app.use(express.urlencoded({ extended: true })); // Permitindo que os dados passem de uma página para a outra.

    //cookieParser
        app.use(cookieParser());

    //Session
        app.use(session({
            secret: 'coquenao',
            resave: true,
            saveUninitialized: true
        }));

    //Req-flash
        app.use(flash())
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash("success_msg"),
            res.locals.error_msg = req.flash("error_msg")
            res.locals.error = req.flash("error")
            res.locals.user = req.user || null
            next()
        })

    // Permitir uso de arquivos estáticos
        app.use(express.static("public"));


    //Rotas
        app.use("/", homeRouter)
        app.use("/fornecedor", fornecedorRouter)
        app.use("/estoque", estoqueRouter)
        app.use("/entrada", entradaRouter)
        app.use("/saida", saidaRouter)

    // Conectando ao servidor
        con.connect(function (err) {
            if (err) throw err;
            console.log("Conectado!");
        })

    // Criando o evento de escuta que vai ativar a aplicação
        app.listen((process.env.PORT || port), () => {
            console.log("Banco de dados rodando na porta: " + port);
        });