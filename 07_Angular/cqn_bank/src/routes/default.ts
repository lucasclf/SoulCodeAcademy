//IMPORTANDO O EXPRESSE E O ROUTER
    import { Router } from 'express'
    const routes = Router()

//IMPORTANDO O CONTROLLER
    import defaultControl from '../controllers/defaultController'

//ROTAS
    //RAIZ
        routes.get("/", defaultControl.homeGet);

    //CADASTRAR
        /* routes.get("/criarconta", defaultControl.criarContaGet);
        routes.get("/criarconta", defaultControl.criarContaPost); */

export default routes