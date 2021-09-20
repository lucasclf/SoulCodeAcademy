/* Importando módulos */
const express = require("express");
const mongoose = require("mongoose");
const rota = require("./router");

const app = express(); //Trazendo a função express() para a const app
const port = 4242; //Criando a const port para facilitar alterações de porta

/* Criando os modelos */

const Professor = mongoose.model("professores", {
    nome: String,
    cpf: Number,
    idade: Number,
    materia: String,
    pcd: Boolean,
});

const Aluno = mongoose.model("alunos", {
    nome: String,
    cpfResponsavel: Number,
    nasc: String,
    turma: String,
    pcd: Boolean,
});

app.use(rota); //Informando que estamos usando o modulo de rota.

app.use(express.static("public"));

mongoose.connect("mongodb+srv://lucas_cqn:lucas_cqn@cluster0.xn84s.mongodb.net/CqnSchool?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

/* Importando o motor de visualização e permintendo e a forma como ele vai visualizar os arquivos. */
app.set("view engine", "ejs");
app.set("views", __dirname, "/views");

/* Permitindo que dados passem de uma página para a outra na forma de json */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/listaProfessor", (req, res) => {
    let consultaProfessor = Professor.find({}, (err, dado) => {
        if (err) {
            return res.status(500).send("Erro ao consultar produto!")
        }
        res.render("listaProfessor", { listaProfessores: dado });
    })
});

app.get("/listaAluno", (req, res) => {
    let consultaAluno = Aluno.find({}, (err, dado) => {
        if (err) {
            return res.status(500).send("Erro ao consultar produto!")
        }
        res.render("listaAluno", { listaAlunos:dado });
    })
});

app.get("/deletarAluno/:id", (req, res)=> {
    let chave = req.params.id;
    Aluno.deleteOne({_id:chave}, (err, result)=>{
        if(err){
            return res.status(500).send("Falha ao deletar.")
        }
    });
    res.send("<script>alert('Aluno deletado com sucesso.'); window.location.href = '/listaAluno'; </script>");
})

app.post("/cadastroProfessor", (req, res) => {
    let professor = new Professor();
    professor.nome = req.body.nome;
    professor.cpf = req.body.cpf;
    professor.idade = req.body.idade;
    professor.materia = req.body.materia;
    professor.pcd = req.body.pcd;

    if (professor.nome == "" || professor.cpf == "" || professor.idade == "" || professor.materia == "") {
        return res.send("<script>alert('Algum campo foi deixado em branco, favor conferir.'); window.location.href = '/cadastroProfessor'; </script>");
    }

    professor.save((err) => {
        if (err)
            return res.status(500).send("Erro ao cadastrar!")
        return res.redirect("/lista")
    })
})

app.post("/cadastroAluno", (req, res) => {
    let aluno = new Aluno();
    aluno.nome = req.body.nome;
    aluno.cpfResponsavel = req.body.cpf;
    aluno.nasc = req.body.nasc;
    aluno.turma = req.body.turma;
    aluno.pcd = req.body.pcd;

    if (aluno.nome == "" || aluno.cpfResponsavel == "" || aluno.nasc == "" || aluno.turma == "") {
        return res.send("<script>alert('Algum campo foi deixado em branco, favor conferir.'); window.location.href = '/cadastroAluno'; </script>");
    }

    aluno.save((err) => {
        if (err)
            return res.status(500).send("Erro ao cadastrar!")
        return res.redirect("/listaAluno")
    })
})

app.listen(port, () => {
    console.log("Servidor rodando na porta ", port)
})