import { Router } from 'express'
import { 
    domicileCById,
    getDomicileC,
    createDomicileC,
    editDomicileC,
    deleteDomicileC
 } from '../controllers/domicile-company.controller.js'

export const domicileCRouter = Router()


domicileCRouter.get('/api/v1/domicileC', getDomicileC)
domicileCRouter.get('/api/v1/domicileC/:id', domicileCById)
domicileCRouter.post('/api/v1/domicileC', createDomicileC)
domicileCRouter.put('/api/v1/domicileC/:id', editDomicileC)
domicileCRouter.delete('/api/v1/domicileC/:id', deleteDomicileC)