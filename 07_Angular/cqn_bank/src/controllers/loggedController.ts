import { Request, Response } from 'express'
import usuarios from '../models/usuarios'
import Usuario from '../models/objetoUsuario'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'
import storage from '../helpers/storage'

class loggedControl {
    public async userGet (req: Request, res: Response): Promise<Response> {
        const id = storage.getItem('userId')
        const usuario = await usuarios.findOne({_id: id})
        return res.json(usuario)
    }
}

export default new loggedControl()
