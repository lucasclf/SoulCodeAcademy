/**
 * Arquivos na raiz:
 * 
 * @eslintrc - Ignorar, deve ser apagado em breve.
 * @gitignore - Arquivo definindo quais arquivos devem ser 
 * ignorados pelo git.
 * @Doc - Documentação da aplicação.
 * @nodemon - Definições do nodemon.
 * @packagelock - Definições de como as dependências devem se comportar.
 * @package - Definições de dependências.
 * 
 * --------------------------------------------------------------------
 * 
 * Pastas principais:
 * 
 * @src - Contem o código original em typescript.
 * @dist - Contem o código transpilado em javascript.
 * 
 * Subpastas:
 * 
 * @config - Contem o arquivo auth.json contendo o hash usado pelo jwt 
 * para gerar o token de login.
 * @controllers - Contem os arquivos que definem quais ações serão tomadas
 * em cada rota.
 * @helpers - Contem os arquivos de middlewares:
 *      @permissions - Contem o middleware de autenticação
 *      @storage - Contem a geração do localstorage que irá armazenar 
 *      informações de login.
 * @models - Contem o modelo a ser usado pelo banco de dados e o 
 * objeto usuario com seus métodos.
 * @public - Contem os arquivos estáticos (Estilização e scripts)
 * @routes - Contem as definições de rotas.
 * @views - Contem os arquivos ejs para exibição no navegador.
 *      @layouts - Contem apenas o arquivo de estrutura dos layouts ejs.
 *      @pages - Contem os arquivos ejs do <main> das páginas.
 *      @partials - Contem os arquivos ejs do header e footer das páginas.
 * 
 * --------------------------------------------------------------------
 * 
 * Instruções:
 * 
 * 1 - Todas as alterações devem ser feitas na pasta SRC.
 * 2 - Após qualquer alteração, rodar o comando NPM RUN BUILD na pasta raiz,
 * para transpilar os arquivos na pasta dist. Infelizmente o comando afeta
 * apenas os arquivos .TS, logo quaisquer outros arquivos 
 * alterados(ejs, css, ...) devem ser copiados manualmente para a pasta dist.
 * 3 - Para rodar a aplicação execute o comando nodemon server.js na pasta dist.
 * 
 */