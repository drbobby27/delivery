import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER } = DataTypes

export const UserCredentials = db.define('user_credential',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username:{
            type: STRING,
            allowNull: false
        },
        password: {
            type: STRING,
            allowNull: false
        },
        employee_id:{
            type: INTEGER,
            allowNull: false
        }
        })


        