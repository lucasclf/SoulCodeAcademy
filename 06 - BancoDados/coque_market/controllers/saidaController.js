//Importando objeto de conexão
    const con = require("../config/conect.js");
 
//Rota de lista de saidas
    exports.saidaLista = (req, res) => {
        let sql = "SELECT s.saida_id, s.saida_cpf, s.saida_quant, s.saida_valor, f.forn_nome, e.estoque_id, e.estoque_nome, e.estoque_valor FROM saida AS s JOIN fornecedor AS f JOIN estoque AS e ON estoque_forn = forn_id AND saida_produto = estoque_id";
        con.query(sql, function (err, dado) {
            if (err) throw err;
            res.render("pages/saida/saidaLista", {lista: dado})
        })
    }

//Rotas de cadastro de saidas
    exports.saidaAddGet = (req, res) => {
        let sql = "SELECT * FROM estoque"

        con.query(sql, function (err, estoque){
            if(err) throw err;
            res.render("pages/saida/saidaAdd", {lista: estoque})
        })
    }

    exports.saidaAddPost = (req, res) =>{
        let cpf = req.body.cpf;
        let quantidade = req.body.quant;
        let produtoEvalor = req.body.produtoEvalor;
        let produto = produtoEvalor.substring(0,produtoEvalor.indexOf("E"))
        let valorTotal = produtoEvalor.substring(produtoEvalor.indexOf("E")+1,produtoEvalor.lenght)*quantidade

        let sql = `INSERT INTO saida(saida_cpf, saida_quant, saida_produto, saida_valor) VALUES('${cpf}', '${quantidade}', '${produto}', '${valorTotal}')`
        let sql2 = `UPDATE estoque SET estoque_quant = estoque_quant-'${quantidade}' WHERE estoque_id = '${produto}'`
        con.query(sql, function(err, result){
            if(err) throw err;
        });
        con.query(sql2, async function wait (err, result){
            if(err) throw err;
        })
        res.redirect("/saida/lista")
    }
/* 
//Rota de deleção de fornecedores
    exports.saidaDrop = (req, res) =>{
        let id = req.params.id;
        let sql = `DELETE FROM saida WHERE entrada_id = '${id}'`;
        con.query(sql, function (err, rows) {
            if (err) throw err;
        res.send("<script>alert('Entrada deletada com sucesso.'); window.location.href = '/entrada/lista'; </script>");
        });
    }

//Rota de edição de fornecedores
    exports.saidaEditGet = (req, res) =>{
        let id = req.params.id;
        let sql = `SELECT * FROM fornecedor WHERE forn_id = '${id}'`;
        con.query(sql, function (err, dado) {
            if (err) throw err;
            res.render("pages/fornecedor/fornecedorEdit", {fornecedor_lista: dado[0]})
        })
    }

    exports.saidaEditPost = (req, res) =>{
        let nome = req.body.nome;
        let cnpj = req.body.cnpj;
        let id = req.body.id;
        let sql = `UPDATE fornecedor SET forn_nome = "${nome}", forn_cnpj = "${cnpj}" WHERE forn_id = '${id}'`
        con.query(sql, function (err, rows) {
            if (err) throw err;
            res.redirect("/fornecedor/lista")
        })
    } */