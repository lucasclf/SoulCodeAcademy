/**
 * Arquivo responsavel pela criação da função de autenticação, responsável
 * por impedir que alguem deslogado acesse páginas restritas dos usuários.
 */

//Importação dos módulos.
    import jwt from 'jsonwebtoken'
    import storage from '../helpers/storage'

//Criação da função de autenticação.
    function authMiddleware (req, res, next) {
        const chave = storage.getItem('token')

        jwt.verify(chave, {"secret": "832374c92d8272d8c100bf63118bc3ac"}.secret, (err, decoded) => {
            if (err){
                res.status(401).send({ error: 'Token invalido'})
            }
            storage.setItem('userId', decoded.id)
            return next()
        })
    }

//Exportação da função.
    export default authMiddleware