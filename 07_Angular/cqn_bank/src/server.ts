import App from './app'

App.listen((process.env.PORT || 4242), ()=>{
    console.log("Servidor rodando!")
})
