//Importando objeto de conexão
    const con = require("../config/conect.js");

//Rota de lista de fornecedores
exports.fornecedorLista = (req, res) => {
    let sql = "SELECT * FROM fornecedor";
    con.query(sql, function (err, dado) {
        if (err) throw err;
        res.render("pages/fornecedor/fornecedorLista", {fornecedor_lista: dado})
    })
}

//Rotas de cadastro de fornecedores
    exports.fornecedorAddGet = (req, res) => {
        res.render("pages/fornecedor/fornecedorAdd")
    }

    exports.fornecedorAddPost = (req, res) =>{
        let nome = req.body.nome;
        let cnpj = req.body.cnpj;
        let sql = `INSERT INTO fornecedor(forn_nome, forn_cnpj) VALUES('${nome}', '${cnpj}')`
        con.query(sql, function(err, result){
            if(err) throw err;
        });
        res.redirect("/fornecedor/lista")
    }

//Rota de deleção de fornecedores
    exports.fornecedorDrop = (req, res) =>{
        let id = req.params.id;
        let sql = `DELETE FROM fornecedor WHERE forn_id = '${id}'`;
        con.query(sql, function (err, rows) {
            if (err) throw err;
        res.send("<script>alert('Fornecedor deletado com sucesso.'); window.location.href = '/fornecedor/lista'; </script>");
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
    }