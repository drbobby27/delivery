import express from "express"
import morgan from "morgan"
import cors from 'cors'
import fileupload from 'express-fileupload'
 
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(fileupload({useTempFiles: true}))


export default app