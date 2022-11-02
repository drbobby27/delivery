import { Router } from 'express'
import {
    getCredentials,
    credentialById,
    createCredential,
    deleteCredential,
    editCredential
} from '../controllers/user_credential.controller.js'

export const credentialsRouter = Router()

credentialsRouter.get('/', getCredentials)
credentialsRouter.get('/:id', credentialById)
credentialsRouter.post('/', createCredential)
credentialsRouter.delete('/:id',  deleteCredential)
credentialsRouter.put('/:id', editCredential)