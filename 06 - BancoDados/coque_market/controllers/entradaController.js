//Importando objeto de conexão
    const con = require("../config/conect.js");
 
//Rota de lista de fornecedores
exports.entradaLista = (req, res) => {
    let sql = "SELECT entrada.entrada_id, fornecedor.forn_nome, estoque.estoque_id, estoque.estoque_nome, entrada.entrada_quant FROM entrada JOIN fornecedor JOIN estoque ON entrada_forn = forn_id AND entrada_produto = estoque_id";
    con.query(sql, function (err, dado) {
        if (err) throw err;
        res.render("pages/entrada/entradaLista", {entrada_lista: dado})
    })
}

//Rotas de cadastro de fornecedores
    exports.entradaAddGet = (req, res) => {
        let sql = "SELECT * FROM estoque"
        let sql2 = "SELECT * FROM fornecedor"
        let aux
        con.query(sql2, function(err, fornecedor){
            if(err) throw err;
            aux =  fornecedor
        })
        con.query(sql, async function wait (err, estoque){
            if(err) throw err;
            res.render("pages/entrada/entradaAdd", { lista: estoque, listaFornecedor: aux})
        })
    }

    exports.entradaAddPost = (req, res) =>{
        let produto = req.body.produto;
        let fornecedor = req.body.fornecedor;
        let quantidade = req.body.quant;
        let sql = `INSERT INTO entrada(entrada_forn, entrada_produto, entrada_quant) VALUES('${fornecedor}', '${produto}', '${quantidade}')`
        let sql2 = `UPDATE estoque SET estoque_quant = estoque_quant+'${quantidade}' WHERE estoque_id = '${produto}'`
        con.query(sql, function(err, result){
            if(err) throw err;
        });
        con.query(sql2, async function wait (err, result){
            if(err) throw err;
        })
        res.redirect("/entrada/lista")
    }
/* 
//Rota de deleção de fornecedores
    exports.entradaDrop = (req, res) =>{
        let id = req.params.id;
        let sql = `DELETE FROM entrada WHERE entrada_id = '${id}'`;
        con.query(sql, function (err, rows) {
            if (err) throw err;
        res.send("<script>alert('Entrada deletada com sucesso.'); window.location.href = '/entrada/lista'; </script>");
        });
    }

//Rota de edição de fornecedores
    exports.fornecedorEditGet = (req, res) =>{
        let id = req.params.id;
        let sql = `SELECT * FROM fornecedor WHERE forn_id = '${id}'`;
        con.query(sql, function (err, dado) {
            if (err) throw err;
            res.render("pages/fornecedor/fornecedorEdit", {fornecedor_lista: dado[0]})
        })
    }

    exports.fornecedorEditPost = (req, res) =>{
        let nome = req.body.nome;
        let cnpj = req.body.cnpj;
        let id = req.body.id;
        let sql = `UPDATE fornecedor SET forn_nome = "${nome}", forn_cnpj = "${cnpj}" WHERE forn_id = '${id}'`
        con.query(sql, function (err, rows) {
            if (err) throw err;
            res.redirect("/fornecedor/lista")
        })
    } */