const express = require("express"); //Chamando o módulo express para a const express
const mongoose = require("mongoose") //Chamando o módulo mongoose para a const mongoose

const app = express(); //Chamando o objeto/função () do express para a const app
const port = 4242; //Setando uma const para a porta, caso precise de alteração.

const Collection = mongoose.model("produtos", {
    nome: String, 
    vlUnit: Number,
    codigoBarras: String,
});

mongoose.connect("mongodb+srv://lucas_cqn:lucas_cqn@cluster0.xn84s.mongodb.net/vendas?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology:true});

app.set("view engine", "ejs"); //Informando o motor de vizualição.
app.set("views", __dirname,"/views"); //Informando a forma como o ejs vai vizualisar os arquivos.

app.use(express.urlencoded({ extended: true })); //Permitindo que os dados passem de uma página para a outra.
app.use(express.json()); //Informando que o fluxo de arquivos sejam transportados em formato json.

app.get("/", (req, res)=>{
    res.send("Página inicial.");
});

app.get("/produtos", (req, res)=>{
    let consultaDB = Collection.find({}, (err, dado)=>{
        if(err){
            return res.status(500).send("Erro ao consultar produto!")
        }
        res.render("produtos", {catalogoProdutos:dado});        
    })
});

app.get("/cadastrarProdutos", (req, res)=>{
    res.render("formprodutos");
})

app.post("/cadastrarProdutos", (req, res)=>{
    let produto = new produtos();
    produto.nome = req.body.nome;
    produto.vlUnit = req.body.valor;
    produto.codigoBarras = req.body.codBarras;

    produto.save((err)=>{
        if(err)
            return res.status(500).send("Erro ao cadastrar!")
        return res.redirect("/produtos")
    })
})

app.listen(port, ()=>{
    console.log("Banco de dados rodando na porta "+port);
});