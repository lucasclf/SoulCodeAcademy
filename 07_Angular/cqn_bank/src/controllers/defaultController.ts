/**
 * Arquivo responsável por definir as ações de cada rota 
 * default(ver ../routes/defaultRoute).
 * @homeGet - Renderiza a página principal.
 * @listaGet - Rota de teste para exibir a lista de usuários do banco de dados.DELETAR!
 * @criarContaGet - Renderiza a página de registro de conta.
 * @criarContaPost - Cria um novo objeto usuario e utiliza o metodo cadastro.
 * @loginGet - Renderiza a página de login.
 * @loginPost - Reseta o storage, verifica se login e senha conferem com algum
 * usuário do banco de dados, gera um token deste usuário e armazena no storage
 * o token e o id desse usuário.
 * 
 */

//Importando módulos.
    import { Request, Response } from 'express'
    import usuarios from '../models/usuarios'
    import Usuario from '../models/objetoUsuario'
    import jwt from 'jsonwebtoken'
    import storage from '../helpers/storage'

//Criando class de defaultControl
    class defaultControl {
        
    public homeGet (req: Request, res: Response){
        res.render('pages/index')
    }
    //DELETAR!
    public async listaGet (req: Request, res: Response): Promise<Response> {
        const lista = await usuarios.find()
        return res.json(lista)
    }

    public criarContaGet (req: any, res: any) {
        return res.render("pages/criarConta")
    }

    public criarContaPost (req: Request, res: Response): void{
        let usuario = new Usuario(req.body.nome, req.body.cpf, "A" + req.body.agencia +"C"+ req.body.conta, req.body.senha, req.body.saldo);

        usuario.cadastro(req, res)
    }

    public loginGet (req: Request, res: Response): void {
        res.render('pages/login')
    }
    
    public async loginPost (req: Request, res: Response): Promise<Response> {
        let cpf = req.body.cpf
        let senha = req.body.senha
        let user = await usuarios.findOne({cpf: cpf})
        storage.removeItem('token')
        storage.removeItem('userId')
        if(!user){
            return res.send("Usuário não encontrado")
        }

        console.log(user.senha)
        
        if(senha != user.senha){
            return res.send("Senha inválida")
        }
        
        const token = jwt.sign({ id: user._id}, {
            "secret": "832374c92d8272d8c100bf63118bc3ac"
        }.secret, {
            expiresIn: 7200
        })

        storage.setItem('token', token)

        res.redirect('/user')
    }

}

//Exportando um novo objeto defaultControl.
    export default new defaultControl()