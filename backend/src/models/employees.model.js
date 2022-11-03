import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import Positions from "./positions.model.js"

const { STRING, INTEGER } = DataTypes


         export const Employees= db.define('employees',{
       
            id: {type: INTEGER, primaryKey: true, autoIncrement: true},
            name: {
                type: STRING,
                allowNull: false
            },
            address: {
                type: STRING,
                allowNull: false
            },
            email: {
                type: STRING,
                allowNull: false
            },
            phoneNumber: {
                type: STRING,
                allowNull: false
            },
            password:{
                type: STRING,
                allowNull: false
            },

            role_id: {
                type: INTEGER,
                allowNull: false
            },


        })
        Employees.belongsTo(Positions, {foreignKey: 'role_id', sourceKey: 'id'});
        Positions.hasMany(Employees, {foreignKey: 'role_id', targetId: 'id'});
    export default Employees