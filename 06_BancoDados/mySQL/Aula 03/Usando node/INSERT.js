var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user",
    database: "shopping_cqn"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Conectado!");
    var sql = "INSERT INTO funcionarios(loja_func, nome_func, cpf_func) VALUES(1, 'ALINE', '98887453344')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("dado inserido: " + sql);
    });
});