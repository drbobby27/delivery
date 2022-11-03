import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import { Deliverman } from "./deliverman.model.js";
import { Purchase } from "./purchase.model.js";
import {Employees} from "./employees.model.js"

const { STRING, INTEGER } = DataTypes

export const Order = db.define('order',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        client_name:{
            type: STRING,
            allowNull: false
        },
        address:{
            type: STRING,
            allowNull: false
        },
        phone_number: {
            type: STRING,
            allowNull: false
        },
        state:{ 
            type: STRING,
            allowNull: false
        },
        employee_id:{ 
            type: INTEGER,
            allowNull: false
        },
        employee_id:{ 
            type: INTEGER,
            allowNull: false
        }
        })





        
