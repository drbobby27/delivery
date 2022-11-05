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
            allowNull: true
        },
        total_value: {
            type: INTEGER,
            allowNull: true
        }
        })


        


        