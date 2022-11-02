import { Employees } from '../models/employees.model.js'



export const employees = async (req,res) => {
    try{
        const employeesList = await Employees.findAll()
        res.json(employeesList)
    }catch(err){
        console.log(err);
    }
   
}

export const employeesById = async (req,res) => {
    const { id } = req.params
    try{
        const employeesId = await Employees.findOne({
            where: {
              id,
            },
          });
          res.json(employeesId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createEmployees = async  (req,res) => {
    try{
        const { name,adress,email,phoneNumber,role_id } = req.body
    if( !name || !adress || !email || !phoneNumber || !role_id ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createEmployees = await Employees.create({
        name,adress,email,phoneNumber,role_id
    })
    res.status(200).json({message: 'Specie was created succesfully', createEmployees})
    }catch(error){
        console.log(error)
    }
    
}

export const deleteEmployees = async (req,res) => {
    const { id } = req.params
    try{
         await Employees.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Employees with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editEmployees = async (req,res) => {
    const { id } = req.params
    try {
        const { name } = req.body
    
        const editEmployees = await Employees.findByPk(id)
        editEmployees.name = name
        await editEmployees.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editEmployees})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}