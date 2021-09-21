var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user",
    database: "coque_market"
});

module.exports = con