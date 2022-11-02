import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER } = DataTypes

export const Order = db.define('order',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        order_number:{
            type: INTEGER,
            allowNull: false
        },
        date_order: {
            type: STRING,
            allowNull: false
        },
        address:{
            type: STRING,
            allowNull: false
        },
        state:{ 
            type: STRING,
            allowNull: false
        },
        purchase_id:{ 
            type: INTEGER,
            allowNull: false
        },
        deliverman_id:{ 
            type: INTEGER,
            allowNull: false
        }
        })


        