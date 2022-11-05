import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import Product from "./product.model.js";
import { Purchase } from "./purchase.model.js";


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
        allowNull: true
    },
    total: {
        type: INTEGER,
        allowNull: true
    }

    })

    DetailPurchase.belongsTo(Purchase, {foreignKey: 'purchase_id', sourceKey: 'id'});
    Purchase.hasMany(DetailPurchase, {foreignKey: 'purchase_id', targetId: 'id'});

    DetailPurchase.belongsTo(Product, {foreignKey: 'product_id', sourceKey: 'id'});
    Product.hasMany(DetailPurchase, {foreignKey: 'product_id', targetId: 'id'});
            