var mongoose = require("mongoose")

mongoose.connect("mongodb+srv://lucas_cqn:lucas_cqn@cluster0.xn84s.mongodb.net/vendas?retryWrites=true&w=majority").then(() => {
    console.log("banco conectado!")
}).catch((err) => {
    console.log("Deu ruim!" + err)
})