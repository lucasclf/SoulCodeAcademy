import { Request, Response } from 'express'
import usuarios from '../models/usuarios'
import Usuario from '../models/objetoUsuario'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'
import storage from '../helpers/storage'

class loggedControl {
    public userGet(req: Request, res: Response) {
        const id = storage.getItem('userId')
        usuarios.findById(id, (err, user) => {
            if (err) {
                return res.status(500).send("Erro ao consultar usuario" + err);
            }

            return res.render('pages/usuario', { userInfo: user })
        })
    }

    public async depositoPost(req: Request, res: Response) {
        const id = storage.getItem('userId')
        const user = await usuarios.findById(id)

        let deposito: number = parseFloat(req.body.valorDeposito)
        console.log('deposito no controler', deposito)
        let usuario = new Usuario(user.nome, user.cpf, user.idBank, user.senha, user.saldo + deposito)

        usuario.movimentacao(req, res)

    }

    public async saquePost(req: Request, res: Response) {
        const id = storage.getItem('userId')
        const user = await usuarios.findById(id)

        let deposito: number = parseFloat(req.body.valorSaque)
        console.log('deposito no controler', deposito)
        let usuario = new Usuario(user.nome, user.cpf, user.idBank, user.senha, user.saldo - deposito)

        usuario.movimentacao(req, res)

    }

    public async transferirPost(req: Request, res: Response) {
        const id = storage.getItem('userId')
        const cpf = req.body.contaTransferir
        const user = await usuarios.findById(id)
        const alvo = await usuarios.findOne({cpf: cpf})

        let deposito: number = parseFloat(req.body.valorTranferir)
        console.log('deposito no controler', deposito)
        let usuario = new Usuario(user.nome, user.cpf, user.idBank, user.senha, user.saldo - deposito)
        let usuarioAlvo = new Usuario(alvo.nome, alvo.cpf, alvo.idBank, alvo.senha, alvo.saldo + deposito)

        await usuarioAlvo.transferencia(alvo._id)
        await usuario.movimentacao(req, res)

    }
}

export default new loggedControl()
