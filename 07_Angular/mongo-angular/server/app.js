const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')

const department_controller = require('./departmentController')
const products_controller = require('./productController')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect(
    "mongodb+srv://lucas_cqn:goldship666@cluster0.xn84s.mongodb.net/cqncompany?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

app.use ('/departments', department_controller)
app.use ('/products', products_controller)


app.listen(4242, () => {
    console.log("Servidor rodando na porta ", 4242);
});