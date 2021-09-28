/**
 * Arquivo de rotas padrões, utilizadas caso o usuário esteja deslogado.
 * @defaultControl - Importação do arquivo controller responsavel pelas
 * rotas deslogadas.
 */

//IMPORTANDO O EXPRESSE E O ROUTER
    import { Router } from 'express'
    const routes = Router()

//IMPORTANDO O CONTROLLER
    import defaultControl from '../controllers/defaultController'

//ROTAS
    //RAIZ
        routes.get("/", defaultControl.homeGet);

    //LISTA
        routes.get("/lista", defaultControl.listaGet)

    //CADASTRAR
        routes.get("/criarConta", defaultControl.criarContaGet);
        routes.post("/criarConta", defaultControl.criarContaPost);

    //LOGIN
        routes.get("/login", defaultControl.loginGet)
        routes.post("/login", defaultControl.loginPost)

//Exportação das rotas.        
    export default routes