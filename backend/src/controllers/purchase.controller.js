import { Purchase } from '../models/purchase.model.js'

export const getPurchases = async (req,res) => {
    try{
        const purchaseList = await Purchase.findAll()
        res.json(purchaseList)
    }catch(err){
        console.log(err);
    }
   
}

export const purchaseById = async (req,res) => {
    const { id } = req.params
    try{
        const purchaseId = await Purchase.findOne({
            where: {
              id,
            },
          });
          res.json(purchaseId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createPurchase = async  (req,res) => {
    try {
        const { date_purchase, total_value } = req.body
        
        const createRegister = await Purchase.create({
            date_purchase, total_value 
        })
        res.status(200).json({message: "Register was created succesfully", createRegister})
           
    } catch (error) {
        console.log(error);
    }
}

export const deletePurchase = async (req,res) => {
    const { id } = req.params
    try{
         await Purchase.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editPurchase= async (req,res) => {
    const { id } = req.params
    try {
        const { date_purchase, total_value } = req.body
    
        const editRegister = await Purchase.findByPk(id)
        editRegister.date_purchase = date_purchase
        editRegister.total_value = total_value
       
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}