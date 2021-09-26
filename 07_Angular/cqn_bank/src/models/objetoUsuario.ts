import usuarios from './usuarios'
import { Request, Response } from 'express'
import storage from '../helpers/storage'


class Usuario {

    NOME!: string;
    CPF!: string;
    IDBANK!: string;
    SENHA!: string;
    SALDO!: number;

    constructor(nome: string, cpf: string, idBank: string, senha: string, saldo: number) {
        this.NOME = nome;
        this.CPF = cpf;
        this.IDBANK = idBank;
        this.SENHA = senha;
        this.SALDO = saldo;
    }

    async movimentacao(req, res){
        const id = storage.getItem('userId')
        let user = await usuarios.findById(id)
        user.nome = this.NOME;
        user.cpf = this.CPF;
        user.idBank = this.IDBANK;
        user.senha = this.SENHA;
        user.saldo = this.SALDO
        user.save((err: any) => {
        })
        
        return await res.redirect('/user/')
    }

    async transferencia(id) {
        let user = await usuarios.findById(id)
        user.nome = this.NOME;
        user.cpf = this.CPF;
        user.idBank = this.IDBANK;
        user.senha = this.SENHA;
        user.saldo = this.SALDO
        user.save((err: any) => {
        })
    } 

    cadastro(req: Request, res: Response) {
        let user = new usuarios();
        user.nome = this.NOME;
        user.cpf = this.CPF;
        user.idBank = this.IDBANK;
        user.senha = this.SENHA;
        user.saldo = this.SALDO;

        user.save((err: any) => {
        })

        res.redirect("/lista")

    }

}

export default Usuario