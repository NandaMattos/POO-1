import { Request, Response } from "express"
import { CriarFuncionariosServices } from '../services/CriarFuncionariosServices'


class CriarFuncionariosController {

    async create(req: Request, res: Response) { 
        const { nome, cpf, funcao } = req.body
        const funcionariosServices = new CriarFuncionariosServices()

        try {
            const funcionarios = await funcionariosServices.create({
                nome, cpf, funcao
            })
            return res.json(funcionarios)
        }   catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
    }

    async index(req: Request, res: Response) { 
        const funcionariosServices = new CriarFuncionariosServices()

        try { 
            const funcionarios = await funcionariosServices.index()
            return res.json(funcionarios)

        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
    }


}

export { CriarFuncionariosController }