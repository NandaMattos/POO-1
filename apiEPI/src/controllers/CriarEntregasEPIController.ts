import { Request, Response } from "express"
import { CriarEntregasEPIServices } from '../services/CriarEntregasEPIServices'

class CriarEntregasEPIController {

    async create(req: Request, res: Response) { 
        const { funcionario_id, nome_epi, data_entrega, quantidade_entregue } = req.body
        const funcionariosServices = new CriarEntregasEPIServices()

        try { 
            const funcionarios = await funcionariosServices.create({
                funcionario_id,
                nome_epi,
                data_entrega,
                quantidade_entregue
            })
            return res.json(funcionarios)
        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
    
    }

    async index(req: Request, res: Response) { 
        const entregasServices = new CriarEntregasEPIServices()

        try { 
            const entregas = await entregasServices.index()
            return res.json(entregas)
            
        } catch (err) {
            return res 
                .status(400)
                .json({ message: err.message})
        }
    }

    async show(req: Request, res: Response) { 
        const entregasServices = new CriarEntregasEPIServices()

        const {id} = req.params

        try {
            const entregas = await entregasServices.show({id})
            return res.json(entregas)

        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }

    }

    async delete(req: Request, res: Response) {
        const entregasServices = new CriarEntregasEPIServices()
        const {id} = req.params

        try {
            await entregasServices.delete({id})
            return res.json({message: 'O Id foi deletado com sucesso!'})

        } catch (err) {
            return res
                .status(400)
                .json({message: err.message})
        }

     }

    async update(req: Request, res: Response) { 
        const entregasServices = new CriarEntregasEPIServices()
        const {id} = req.params
        const { funcionario_id, nome_epi, data_entrega, quantidade_entregue} = req.body

        try {
           const entrega = await entregasServices.update(id, {
                funcionario_id,
                nome_epi,
                data_entrega,
                quantidade_entregue
            })

            return res.json(entrega)

        } catch (err) {
            return res  
                .status(400)
                .json({ message: err.message})
        }


    }

}

export { CriarEntregasEPIController }