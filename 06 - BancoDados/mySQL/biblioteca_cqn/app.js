// Chamando módulos
    const express = require("express"); // Importando o express para dentro da const express
    const app = express();
    const routesUsuario = require("./routes/usuario"); // Importando as rotas de usuário para dentro da const routesUsuario
    const routesAdmin = require("./routes/admin"); // Importando as rotas de admin para dentro da const routesAdmin
    const expressLayouts =require("express-ejs-layouts")

// Configurações
    // Definindo porta
        const PORT = process.env.PORT || 4242; // Definindo a porta.

    // EJS
        app.use(expressLayouts)
        app.set("layout", "./layouts/main")
        app.set("view engine", "ejs"); //Informando o motor de vizualição.
        
    // Express
        app.use(express.json()); // Definindo que os arquivos sejam enviados via JSON.
        app.use(express.urlencoded({ extended: true })); // Permitindo que os dados passem de uma página para a outra.

    // Permitir uso de arquivos estáticos
        app.use(express.static("public"));
        
    // Rotas
        app.use("/admin", routesAdmin);
        app.use("/", routesUsuario);


app.listen(PORT, () => {
    console.log("Banco de dados rodando na porta: " + PORT);
});