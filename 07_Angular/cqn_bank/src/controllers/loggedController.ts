/**
 * Arquivo responsável por definir as ações de cada rota 
 * logada(ver ../routes/loggedRoute).
 * @userGet - Acessa o id armazenado no storage e renderiza 
 * a página pessoal daquele usuário.
 * @depositoPost - Gera um objeto usuario e recebe as informações de deposito do 
 * front e envia para o metodo movimentação do objeto usuario gerado.
 * @saquePost - Gera um objeto usuario e recebe as informações de saque do 
 * front e envia para o metodo movimentação do objeto usuario gerado.
 * @transferirPost - Gera dois objetos usuario, um que irá transferir e outro que
 * irá receber, chama o metodo movimentação para reduzir o valor do primeiro usuario
 * e chama o metodo transferir para acrescentar o valor ao segundo usuario.
 * @logout - Limpa o storage e renderiza a página principal.
 * 
 */

//Importando módulos.
    import { Request, Response } from 'express'
    import usuarios from '../models/usuarios'
    import Usuario from '../models/objetoUsuario'
    import storage from '../helpers/storage'

//Criação da classe loggedControl
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

        public async logout(req: Request, res: Response) {
            storage.removeItem('userId')
            storage.removeItem('token')
            res.redirect('/')
        }
    }

//Exportação de um novo objeto loggedControl
    export default new loggedControl()
