import { getCustomRepository } from "typeorm"
import { CriarEntregasEPIRepository } from "../repositories/CriarEntregasEPIRepository";

interface IEntregaEPICreate {
    funcionario_id: string
    nome_epi: string
    data_entrega: Date
    quantidade_entregue: number
}
interface IEntregaEPIShow {
    id: string
}

interface IEntregaEPIUpdate {
    funcionario_id: string
    nome_epi: string
    data_entrega: Date
    quantidade_entregue: number
}

class CriarEntregasEPIServices {
    async create({ funcionario_id, nome_epi, data_entrega, quantidade_entregue}: IEntregaEPICreate) {
        const entregaEPIRepository = getCustomRepository(CriarEntregasEPIRepository)

        const entregas = await entregaEPIRepository.create({ 
            funcionario_id,
            nome_epi,
            data_entrega,
            quantidade_entregue
        })

        await entregaEPIRepository.save(entregas)
        return entregas
    }

    async index(){
        const entregaEPIRepository = getCustomRepository(CriarEntregasEPIRepository)

        const entregas = await entregaEPIRepository.find( {
            relations: ["funcionario"]
        })

        return entregas
    }

    async show({id}: IEntregaEPIShow) {
        const entregasRepository = getCustomRepository(CriarEntregasEPIRepository)

        const entregas = await entregasRepository.findOne(id, {
            relations: ["funcionario"]
        })
         
        if(!entregas) {
            throw new Error('Este Id não existe!')
        }

        return entregas
    }

    async delete({id}: IEntregaEPIShow) {
        const entregasRepository = getCustomRepository(CriarEntregasEPIRepository)

        const entregas = await entregasRepository.findOne({id})

        if(!entregas) {
            throw new Error('Este Id não existe!')

        } return await entregasRepository.delete({id})
    }

    async update(id, {funcionario_id, nome_epi, data_entrega, quantidade_entregue}: IEntregaEPIUpdate) {
        const entregasRepository = getCustomRepository(CriarEntregasEPIRepository)
        let entregas = await entregasRepository.findOne({id})

        if(!entregas) {
            throw new Error('Este Id não existe!')
        }

        await entregasRepository.update(id, {
            funcionario_id,
            nome_epi,
            data_entrega,
            quantidade_entregue
        })

        entregas = await entregasRepository.findOne({id})

        return entregas
    }

}


export { CriarEntregasEPIServices }