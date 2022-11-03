import { Employee } from '../models/employee.model.js'

export const getEmployees = async (req,res) => {
    try{
        const employeeList = await Employee.findAll()
        res.json(employeeList)
    }catch(err){
        console.log(err);
    }
   
}

export const employeeById = async (req,res) => {
    const { id } = req.params
    try{
        const employeeId = await Employee.findOne({
            where: {
              id,
            },
          });
          res.json(employeeId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createEmployee = async  (req,res) => {
    try {
        const { full_name, phone_number, address, cc, email, rol_id } = req.body
        if( !full_name || !phone_number || !address || !cc || !email || !rol_id  ){
            return res.status(400).json({error: "Uno o más campos vacios"})
        }
        const createRegister = await Employee.create({
            full_name, phone_number, address, cc, email, rol_id 
        })
        res.status(200).json({message: "Register was created succesfully", createRegister})   
    } catch (error) {
        console.log(error)        
    }
}

export const deleteEmployee = async (req,res) => {
    const { id } = req.params
    try{
         await Employee.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editEmployee = async (req,res) => {
    const { id } = req.params
    try {
        const { full_name, phone_number, address, cc, email, rol_id } = req.body
    
        const editRegister = await Employee.findByPk(id)
        editRegister.full_name = full_name
        editRegister.phone_number = phone_number
        editRegister.address = address
        editRegister.cc = cc
        editRegister.email = email
        editRegister.rol_id = rol_id
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}