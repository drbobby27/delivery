import { Order } from '../models/order.model.js'

export const getOrders = async (req,res) => {
    try{
        const orderList = await Order.findAll()
        res.json(orderList)
    }catch(err){
        console.log(err);
    }
   
}

export const orderById = async (req,res) => {
    const { id } = req.params
    try{
        const orderId = await Order.findOne({
            where: {
              id,
            },
          });
          res.json(orderId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createOrder = async  (req,res) => {
    try {
        const { order_number, date_order, address, state, purchase_id,deliverman_id,employee_id } = req.body
        
        if( !order_number || !date_order || !address || !state || !purchase_id || !deliverman_id ||!employee_id   ){
            return res.status(400).json({error: "Uno o más campos vacios"})
        }
        const createRegister = await Order.create({
            order_number, date_order, address, state, purchase_id, deliverman_id,employee_id
        })
        res.status(200).json({message: "Register was created succesfully", createRegister})
           
    } catch (error) {
        console.log(error)        
    }
}

export const deleteOrder = async (req,res) => {
    const { id } = req.params
    try{
         await Order.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editOrder= async (req,res) => {
    const { id } = req.params
    try {
        const { order_number, date_order, address, state, purchase_id,deliverman_id,employee_id } = req.body
    
        const editRegister = await Order.findByPk(id)
        editRegister.order_number = order_number
        editRegister.date_order = date_order
        editRegister.address = address
        editRegister.state = state
        editRegister.purchase_id = purchase_id
        editRegister.deliverman_id = deliverman_id
        editRegister.employee_id = employee_id
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}