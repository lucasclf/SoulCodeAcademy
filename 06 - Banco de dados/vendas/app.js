// Carregando módulos.
    const express = require("express"); //Chamando o módulo express para a const express
    const app = express(); //Chamando o objeto/função () do express para a const app
    const mongoose = require("mongoose") //Chamando o módulo mongoose para a const mongoose
    const routes = require("./routes/routes") //Chamando o módulo de rotas criado por nós

// Configurações
    // Porta
        const port = 4242; //Setando uma const para a porta, caso precise de alteração.

    // Mongoose
        mongoose.connect("mongodb+srv://lucas_cqn:lucas_cqn@cluster0.xn84s.mongodb.net/vendas?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

    // EJS
        app.set("view engine", "ejs"); //Informando o motor de vizualição.
    
    // Express    
        app.use(express.json()); //Informando que o fluxo de arquivos sejam transportados em formato json.
        app.use(express.urlencoded({ extended: true })); //Permitindo que os dados passem de uma página para a outra.
    
    // Models
        /* const Produtos = mongoose.model("produtos", {
        nome: String,
        vlUnit: Number,
        codigoBarras: String,
        }); */

    // Rotas
        app.use("/", routes)

app.listen(port, () => {
    console.log("Banco de dados rodando na porta: " + port);
});