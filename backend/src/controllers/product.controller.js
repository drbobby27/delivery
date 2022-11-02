import { Product } from '../models/product.model.js'

export const getProducts = async (req,res) => {
    try{
        const productList = await Product.findAll()
        res.json(productList)
    }catch(err){
        console.log(err);
    }
   
}

export const productById = async (req,res) => {
    const { id } = req.params
    try{
        const productId = await Product.findOne({
            where: {
              id,
            },
          });
          res.json(productId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createProduct = async  (req,res) => {
    const { product_name, price, description, image_url, category_id } = req.body
    if( !product_name || !price || !description || !image_url || !category_id ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createRegister = await Product.create({
        product_name, price, description, image_url, category_id 
    })
    res.status(200).json({message: "Register was created succesfully", createRegister})
}

export const deleteProduct = async (req,res) => {
    const { id } = req.params
    try{
         await Product.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editProduct = async (req,res) => {
    const { id } = req.params
    try {
        const { product_name, price, description, image_url, category_id  } = req.body
    
        const editRegister = await Product.findByPk(id)
        editRegister.product_name = product_name
        editRegister.price = price
        editRegister.description = description
        editRegister.image_url = image_url
        editRegister.category_id = category_id
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}