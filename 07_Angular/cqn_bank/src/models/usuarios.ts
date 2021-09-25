import { Schema, model, Document } from 'mongoose'

interface UsuarioInterface extends Document{
    nome: string
    cpf: string
    agencia: string
    conta: string
    senha: string
    saldo: number
}

const UsuarioSchema = new Schema ({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    conta: {
        type: String,
        required: true
    },
    agencia:{
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
});

export default model<UsuarioInterface>('usuarios', UsuarioSchema)
