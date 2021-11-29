import { Repository, EntityRepository } from 'typeorm'
import { Funcionario } from '../entities/CriarFuncionario'

@EntityRepository(Funcionario)
class CriarFuncionariosRepository extends Repository<Funcionario> {


}

export { CriarFuncionariosRepository }