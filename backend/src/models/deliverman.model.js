import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import DomicileC from "./domicile-company.model.js"
const { STRING, INTEGER } = DataTypes

export const Deliverman = db.define('deliverman',{ 
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
        company_id:{ 
            type: INTEGER,
            allowNull: false
        }
        })

        Deliverman.belongsTo(DomicileC, {foreignKey: 'company_id', sourceKey: 'id'});
        DomicileC.hasMany(Deliverman, {foreignKey: 'company_id', targetId: 'id'});


        