import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import { ProductCategory } from './product_category.model.js'

const { STRING, INTEGER } = DataTypes

 const Product = db.define('product',{ 
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
            type: INTEGER,
            allowNull: false
        }
        })


        Product.belongsTo(ProductCategory, {foreignKey: 'category_id', sourceKey: 'id'});
        ProductCategory.hasMany(Product, {foreignKey: 'category_id', targetId: 'id'});
        
        export default Product