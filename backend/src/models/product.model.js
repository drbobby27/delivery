import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER } = DataTypes

export const Product = db.define('product',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name:{
            type: STRING,
            allowNull: false
        },
        price: {
            type: INTEGER,
            allowNull: false
        },
        description:{
            type: STRING,
            allowNull: false
        },
        image_url:{ 
            type: STRING,
            allowNull: false
        },
        category_id:{ 
            type: STRING,
            allowNull: false
        }
        })


        