/* Importando módulos */
const express = require("express");
const mongoose = require("mongoose");
const rota = require("./router");

const app = express(); //Trazendo a função express() para a const app
const port = 4242; //Criando a const port para facilitar alterações de porta

const Collection = mongoose.model("professores", {
    nome: String, 
    cpf: Number,
    idade: Number,
    materia: String,
    pcd: Boolean,
});

app.use(rota) //Informando que estamos usando o modulo de rota.

mongoose.connect("mongodb+srv://lucas_cqn:lucas_cqn@cluster0.xn84s.mongodb.net/CqnSchool?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology:true});

/* Importando o motor de visualização e permintendo e a forma como ele vai visualizar os arquivos. */
app.set("view engine", "ejs");
app.set("views", __dirname,"/views"); 

/* Permitindo que dados passem de uma página para a outra na forma de json */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/lista", (req, res)=>{
    let consultaDB = Collection.find({}, (err, dado)=>{
        if(err){
            return res.status(500).send("Erro ao consultar produto!")
        }
        res.render("lista", {listaProfessores:dado});        
    })
});

app.post("/cadastro", (req, res)=>{
    let professor = new Collection();
    professor.nome = req.body.nome;
    professor.cpf = req.body.cpf;
    professor.idade = req.body.idade;
    professor.materia = req.body.materia;
    professor.pcd = req.body.pcd;

    professor.save((err)=>{
        if(err)
            return res.status(500).send("Erro ao cadastrar!")
        return res.redirect("/lista")
    })
})

app.listen(port, ()=>{
    console.log("Servidor rodando na porta ",port)
})