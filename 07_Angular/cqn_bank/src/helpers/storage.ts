/**
 * Arquivo responsável pela criação de um LocalStorage para armazenar informações
 * de login.
 */

//Importação de módulo.
    import localStorage from 'node-localstorage'

//Criação das variaveis utilizadas.
    //Constante responsavel por utilizar o método LocalStorage do módulo node-localstorage
        const LocalStorage = localStorage.LocalStorage

    //Variavel do tipo LocalStorage
        var storage: localStorage.LocalStorage

//Função responsável por criar um LocalStorage caso ele não exista.
    if (typeof storage === 'undefined' || storage === null){
        storage = new LocalStorage('./scratch')
    }

//Exportação do localStorage.
    export default storage