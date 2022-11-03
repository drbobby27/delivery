import express from "express"
import morgan from "morgan"
import cors from 'cors'
import fileupload from 'express-fileupload'
import { employeesRouter } from './routes/employees.route.js'
import { positionsRouter } from './routes/positions.route.js'
import { router } from './routes/auth.route.js'
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(fileupload({useTempFiles: true}))
app.use(employeesRouter)
app.use(positionsRouter)
app.use(router)

export default app