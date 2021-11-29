import { Router } from 'express'
import  { CriarEntregasEPIController } from './controllers/CriarEntregasEPIController'
import { CriarFuncionariosController} from './controllers/CriarFuncionariosController'

const routes = Router();
const entregaEPIController = new CriarEntregasEPIController()
const funcionariosController = new CriarFuncionariosController()

routes.post('/funcionarios', funcionariosController.create)
routes.get('/funcionarios', funcionariosController.index)

routes.post('/entregaepi', entregaEPIController.create)
routes.get('/entregaepi', entregaEPIController.index)
routes.get('/entregaepi/:id', entregaEPIController.show)
routes.delete('/entregaepi/:id', entregaEPIController.delete)
routes.put('/entregaepi/:id', entregaEPIController.update)




export { routes }

