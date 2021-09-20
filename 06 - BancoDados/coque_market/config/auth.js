const localStrategy = require("passport-local").Strategy;
const con = require("./conect")



exports.master = function(passport){
    
        let sql = `SELECT * FROM usuario WHERE usuario_login = '${login}'`
        let User
        con.query(sql, function(err, dado){
            if(err) throw err;
            User = dado
        })

    passport.use(new localStrategy({usernameField: "login", passwordField: "senha"}, (login, senha, done) => {
        
            if(!User.usuario_login){
                return done(null, false, {message: "Esta conta não existe!"})
            }
            if(User.usuario_senha == senha){
                return done(null, usuario)
            } else{
                return done(null, false, {message: "Senha inválida!"})
            }

    }))

    passport.serializeUser((done)=>{
        done(null, User.id)
    })

    passport.deserializeUser((id, done)=>{
        Usuario.findById(id, (err,usuario)=>{
            done(err, usuario)
        })
    })
}