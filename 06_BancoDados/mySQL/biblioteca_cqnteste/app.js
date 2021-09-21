// Chamando módulos
    const express = require("express"); // Importando o express para dentro da const express
    const app = express(); // Inserindo a função express() dentro do const app
    const routesUsuario = require("./routes/usuario"); // Importando as rotas de usuário para dentro da const routesUsuario
    /* const connect = require("./config/connect") */
    //const routesAdmin = require("./routes/admin"); // Importando as rotas de admin para dentro da const routesAdmin
    //const routesLogin = require("./routes/login"); //Importando as rotas de login
    const expressLayouts = require("express-ejs-layouts") //Importando o módulo express-layouts
    const cookieParser = require('cookie-parser');
    const session = require('express-session');
    const flash = require('req-flash');
    const passport = require("passport")
/*     require("./config/auth")(passport) */

// Configurações

    // Definindo porta
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
            secret: 'biblioteca',
            resave: true,
            saveUninitialized: true
        }));
        app.use(passport.initialize());
        app.use(passport.session());    

    //Req-flash
        app.use(flash())
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash("success_msg"),
            res.locals.error_msg = req.flash("error_msg"),
            res.locals.error = req.flash("error")
            res.locals.user = req.user || null
            next()
        })

    // Permitir uso de arquivos estáticos
        app.use(express.static("public"));

    // Rotas
        app.use("/user", routesUsuario);

    // Criando o evento de escuta que vai ativar a aplicação
        app.listen((process.env.PORT || port), () => {
            console.log("Banco de dados rodando na porta: " + port);
        });













