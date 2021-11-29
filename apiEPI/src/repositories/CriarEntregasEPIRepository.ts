import { Repository, EntityRepository } from 'typeorm'
import { EntregaEPI } from '../entities/CriarEntregaEPI'

@EntityRepository(EntregaEPI)
class CriarEntregasEPIRepository extends Repository<EntregaEPI> {


}

export { CriarEntregasEPIRepository }