import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { INTEGER } = DataTypes

export const DetailPurchase = db.define('detail-purchase',{
       
    id: {
        type: INTEGER,
        primaryKey: true, 
        autoIncrement: true},
    purchase_id: {
         type: INTEGER,
        allowNull: false
        },
    product_id: {
        type: INTEGER,
        allowNull: false
    }, 
    amount: {
        type: INTEGER,
        allowNull: false
    },
    total: {
        type: INTEGER,
        allowNull: false
    }

    })

            