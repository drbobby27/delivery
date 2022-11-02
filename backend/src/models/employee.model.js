import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER } = DataTypes

export const Employee = db.define('employee',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        full_name:{
            type: STRING,
            allowNull: false
        },
        phone_number: {
            type: INTEGER,
            allowNull: false
        },
        address:{
            type: STRING,
            allowNull: false
        },
        cc:{ 
            type: INTEGER,
            allowNull: false
        },
        email:{ 
            type: STRING,
            allowNull: false
        },
        rol_id:{ 
            type: INTEGER,
            allowNull: false
        }
        })


        