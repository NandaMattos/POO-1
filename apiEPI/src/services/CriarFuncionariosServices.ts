import { CriarFuncionariosRepository } from "../repositories/CriarFuncionariosRepository"
import { getCustomRepository } from "typeorm"

interface IFuncionariosCreate {
    nome: string
    cpf: string
    funcao: string
}

class CriarFuncionariosServices {
    async create({nome,cpf, funcao }: IFuncionariosCreate ) {
        const funcionariosRepository = getCustomRepository(CriarFuncionariosRepository)

        const funcionarios = funcionariosRepository.create({
            nome, 
            cpf, 
            funcao 
        })

        await funcionariosRepository.save(funcionarios)
        return funcionarios 

    }

    async index(){
        const funcionariosRepository = getCustomRepository(CriarFuncionariosRepository)

        const funcionarios = await funcionariosRepository.find()

        return funcionarios
    }

}


export { CriarFuncionariosServices }