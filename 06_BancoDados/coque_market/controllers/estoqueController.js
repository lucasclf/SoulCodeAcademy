//Importando objeto de conexão
    const con = require("../config/conect.js");

//Rota de lista de produtos
    exports.estoqueLista = (req, res) => {
        let sql = "SELECT e.estoque_valor, e.estoque_id, e.estoque_nome, f.forn_nome, e.estoque_quant FROM estoque AS e JOIN fornecedor AS f ON estoque_forn = forn_id;";
        con.query(sql, function (err, dado) {
            if (err) throw err;
            res.render("pages/estoque/estoqueLista", {estoque_lista: dado})
        })
    }
 
//Rotas de cadastro de produtos
    exports.estoqueAddGet = (req, res) => {
        let sql = "SELECT * FROM fornecedor"
        con.query(sql, function(err, fornecedor){
            if(err) throw err;
            res.render("pages/estoque/estoqueAdd", {lista: fornecedor})
        })
        
    }

    exports.estoqueAddPost = (req, res) =>{
        let nome = req.body.nome;
        let fornecedor = req.body.fornecedor;
        let quant = req.body.quant;
        let valor = req.body.valor;
        let sql = `INSERT INTO estoque(estoque_forn, estoque_nome, estoque_quant, estoque_valor) VALUES('${fornecedor}', '${nome}', '${quant}', '${valor}')`
        con.query(sql, function(err, result){
            if(err) throw err;
        });
        res.redirect("/estoque/lista")
    }

//Rota de deleção de produtos
    exports.estoqueDrop = (req, res) =>{
        let id = req.params.id;
        let sql = `DELETE FROM estoque WHERE forn_id = '${id}'`;
        con.query(sql, function (err, rows) {
            if (err) throw err;
        res.send("<script>alert('Produto deletado com sucesso.'); window.location.href = '/fornecedor/lista'; </script>");
        });
    }

//Rota de edição de produtos
    exports.estoqueEditGet = (req, res) =>{
        let id = req.params.id;
        let sql = `SELECT f.*, e.estoque_id, e.estoque_forn, e.estoque_nome, e.estoque_valor FROM fornecedor AS f JOIN estoque AS e WHERE estoque_id = '${id}'`;
        con.query(sql, function (err, dado) {
            if (err) throw err;
            res.render("pages/estoque/estoqueEdit", {estoque_lista: dado})
        })
    }

    exports.estoqueEditPost = (req, res) =>{
        let nome = req.body.nome;
        let fornecedor = req.body.fornecedor;
        let valorUnit = req.body.valorUnit;
        let id = req.body.id;
        let sql = `UPDATE estoque SET estoque_forn = '${fornecedor}', estoque_nome = '${nome}', estoque_valor = '${valorUnit}' WHERE estoque_id = '${id}'`
        con.query(sql, function (err, rows) {
            if (err) throw err;
            res.redirect("/estoque/lista")
        })
    }