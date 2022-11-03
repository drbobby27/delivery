import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import { Deliverman } from "./deliverman.model.js";
import { Order } from "./order.model.js";


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
        },
        employee_id:{ 
            type: INTEGER,
            allowNull: false
        },
        order_id: {
            type: INTEGER,
            allowNull: false
        }
        })


        Purchase.belongsTo(Order, {foreignKey: 'order_id', sourceKey: 'id'});
        Order.hasMany(Purchase, {foreignKey: 'order_id', targetId: 'id'});


        Purchase.belongsTo(Deliverman, {foreignKey: 'employee_id', sourceKey: 'id'});
        Deliverman.hasMany(Purchase, {foreignKey: 'employee_id', targetId: 'id'});
        