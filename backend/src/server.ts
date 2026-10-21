import express, { type Request, type Response } from "express";
import { clienteRouter } from "../src/routes/cliente.route"

const app = express()
const port = 3000

app.use (express.json())


