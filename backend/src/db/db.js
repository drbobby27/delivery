import  Sequelize  from "sequelize"
import dotenv from 'dotenv/config'
import { database, username, password, host, dialect} from '../helpers/helper.js'


export const db = new Sequelize('', "delivery", "delivery123", {
    host:'database-1.caidmnar18ph.us-east-1.rds.amazonaws.com',
    dialect:'mysql',
  })

