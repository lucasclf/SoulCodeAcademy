import { Request, Response } from 'express'
import usuarios from '../models/usuarios'
import Usuario from '../models/objetoUsuario'

//ROTA DO HOME

class defaultControl {

    public homeGet (req: Request, res: Response){
        res.render('pages/index')
    }

    public async listaGet (req: Request, res: Response): Promise<Response>{
        const lista = await usuarios.find()
        return res.json(lista)
    }

    public criarContaGet (req: any, res: any) {
        return res.render("pages/criarConta")
    }

    public criarContaPost (req: Request, res: Response): void{
        let usuario = new Usuario(req.body.nome, req.body.cpf, req.body.conta, req.body.agencia, req.body.senha, req.body.saldo);

        usuario.cadastro(req, res)
    }

}
/* exports.homeGet = (req: any, res: any) => {
    res.render("pages/index")
};

exports.criarContaGet = (req: any, res: any) => {
    res.render("pages/criarConta")
}

exports.criarContaPost = (req: any, res: any) => {
    let usuario = new Usuario(req.body.nome, req.body.cpf, req.body.conta, req.body.agencia, req.body.senha, req.body.saldo);

    usuario.cadastro(req, res);


    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let conta = req.body.conta;
    let agencia = req.body.agencia;
    let senha = req.body.senha;
    let saldo = req.body.saldo;

    Usuario.cadastro(nome, cpf, conta, agencia, senha, saldo)

        console.log(usuario)

} */

export default new defaultControl()