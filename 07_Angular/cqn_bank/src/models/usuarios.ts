/**
 * Arquivo responsavel pela criação da interface de Usuario e do Modelo de 
 * usuário a ser usado pelo banco de dados.
 */

//Importação dos módulos
    import { Schema, model, Document } from 'mongoose'

//Criação da interface do Usuário.
    interface UsuarioInterface extends Document{
        nome: string
        cpf: string
        idBank: string
        senha: string
        saldo: number
    }

//Criação do modelo de Usuario a ser usado pelo banco de dados.
    const UsuarioSchema = new Schema ({
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        idBank: {
            type: String,
            required: true
        },
        senha: {
            type: String,
            required: true
        },
        saldo: {
            type: Number,
            default: 0
        }
        },
        {timestamps: true
        })

//Exportação do modelo de usuario.
    export default model<UsuarioInterface>('usuarios', UsuarioSchema)
