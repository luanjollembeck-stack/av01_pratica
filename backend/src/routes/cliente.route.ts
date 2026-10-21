import expres,  { type Request, type Response } from 'express'
import { clienteService } from "../services/cliente.service.js"


clienteService.get("/".async( request: Request, response: Response ) => {

})