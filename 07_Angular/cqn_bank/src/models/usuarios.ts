import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcryptjs'
import { NextFunction } from 'express'

interface UsuarioInterface extends Document{
    nome: string
    cpf: string
    idBank: string
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

    UsuarioSchema.pre('save', async function(next) {
        const hash = await bcrypt.hash(this.senha, 10)
        this.senha = hash
    })

export default model<UsuarioInterface>('usuarios', UsuarioSchema)
