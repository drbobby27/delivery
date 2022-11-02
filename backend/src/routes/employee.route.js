import { Router } from 'express'
import {
    getEmployees,
    employeeById,
    createEmployee,
    deleteEmployee,
    editEmployee
} from '../controllers/employee.controller.js'

export const employeeRouter = Router()

employeeRouter.get('/',getEmployees)
employeeRouter.get('/:id',employeeById)
employeeRouter.post('/',createEmployee)
employeeRouter.delete('/:id',deleteEmployee)
employeeRouter.put('/:id',editEmployee)