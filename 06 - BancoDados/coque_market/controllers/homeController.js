//Importando objeto de conexão
    const con = require("../config/conect.js");

//Rota do home
    exports.homeGet = (req, res) => {
        res.render("pages/home")
    }
//Rota de login
    /* exports.loginPost =(req, res) => {
        let sql = `SELECT * FROM usuario WHERE usuario_login = '${req.body.login}'`
        con.query(sql, function (err, dado) {
            if (err) throw err
            if(dado[0] == undefined){
                req.flash("error_msg", "Usuário inexistente!")
                return res.redirect("/")
            } else if(dado != []){
            user = dado[0].usuario_login
            senha = dado[0].usuario_senha
            }
           
        })
             if(user == 0){
                req.flash("error_msg", "Usuário inexistente!")
                res.redirect("/")
            } else if(senha == req.body.senha){
                req.flash("success_msg", "Usuário logado")
                res.redirect("/")
            }
            
            
    } */
