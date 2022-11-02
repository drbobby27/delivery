import express from "express"
import morgan from "morgan"
import cors from 'cors'
import fileupload from 'express-fileupload'
import helmet from 'helmet'
import { credentialsRouter } from './routes/user_credential.route.js'
import { delivermanRouter } from './routes/deliverman.route.js'
import { employeeRouter } from './routes/employee.route.js'
import { orderRouter } from './routes/order.route.js'
import { productRouter } from './routes/product.route.js'
import { purchaseRouter } from "./routes/purchase.route.js"


const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(fileupload({useTempFiles: true}))
app.use('/api/v1/credential', credentialsRouter)
app.use('/api/v1/deliverman', delivermanRouter)
app.use('/api/v1/employee', employeeRouter)
app.use('/api/v1/order', orderRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/purchase', purchaseRouter)

export default app