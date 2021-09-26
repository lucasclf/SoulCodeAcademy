//IMPORTANDO O EXPRESSE E O ROUTER
    import { Router } from 'express'
    const routes = Router()

//IMPORTANDO O CONTROLLER
    import loggedControl from '../controllers/loggedController'

//IMPORTANDO OS MIDDLEWARE
    import authMiddleware from '../helpers/permissions'

//DECLARANDO O USO DO MIDDLEWARE DE AUTENTICAÇÃO
    routes.use(authMiddleware)

//ROTAS 
    //AREA DE USUÁRIO
        routes.get('/', loggedControl.userGet);

    //DEPOSITO
        routes.post('/deposito', loggedControl.depositoPost)

    //SAQUE
        routes.post('/saque', loggedControl.saquePost)

    //TRANSFERÊNCIA
        routes.post('/transferir', loggedControl.transferirPost)

    export default routes