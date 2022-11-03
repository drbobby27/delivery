import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import Employees from './employees.model.js'

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
        }
        })


        Order.belongsTo(Employees, {foreignKey: 'employee_id', sourceKey: 'id'});
        Employees.hasMany(Order, {foreignKey: 'employee_id', targetId: 'id'});