import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";



const { STRING, INTEGER } = DataTypes

export const Purchase = db.define('purchase',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date_purchase:{
            type: STRING,
            allowNull: false
        },
        total_value: {
            type: INTEGER,
            allowNull: false
        }
        })


        


        