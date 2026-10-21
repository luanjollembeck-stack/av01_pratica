import { type Request, type Response } from 'express'
import { Pool } from 'pg'
import { Clientes } from '../types/cliente';

class clienteService {
    async getAll(): Promise<Clientes[]> {
        const res = await Pool.query<Clientes>("SELECT * FROM clientes");;
        return res.rows
    }
}

export default clienteService