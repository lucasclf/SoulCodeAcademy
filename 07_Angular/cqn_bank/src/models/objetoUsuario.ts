import usuarios from './usuarios'


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

    /* saldo(){

    } */

    /* saque(){

    } */

    /* deposito(){

    } */

    /* transferir(){

    } */

    cadastro(req: any, res: any) {
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