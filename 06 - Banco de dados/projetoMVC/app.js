// Módulos
    const express = require("express"); // Importando o express para dentro da const express
    const app = express(); // Inserindo a função express() dentro do const app
    const mongoose = require("mongoose"); // Importando o mongoose para dentro da const mongoose
    const expressLayouts = require("express-ejs-layouts"); //Importando o express-ejs-layouts
    const routesLivros = require("./routes/livros")

//Configurações
    //Criando a porta
        const port = 4242

    //Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb+srv://lucas_cqn:lucas_cqn@cluster0.xn84s.mongodb.net/CqnLibrary?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }); // Conectando ao servidor do mongoDB

    // EJS
        app.use(expressLayouts) //Informando o uso do expressLayouts
        app.set("layout", "./layouts/main") //Informando a pasta de layouts
        app.set("view engine", "ejs"); //Informando o motor de vizualição.

    // Express
        app.use(express.json()); // Definindo que os arquivos sejam enviados via JSON.
        app.use(express.urlencoded({ extended: true })); // Permitindo que os dados passem de uma página para a outra.

    // Permitir uso de arquivos estáticos
        app.use(express.static("public"));

    //Rotas
        app.use("/", routesLivros);
    
    // Criando o evento de escuta que vai ativar a aplicação
    app.listen((process.env.PORT || port), () => {
        console.log("Banco de dados rodando na porta: " + port);
    });