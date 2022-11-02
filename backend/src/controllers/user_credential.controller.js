import { UserCredentials } from '../models/user_credential.model.js'

export const getCredentials = async (req,res) => {
    try{
        const userCredentialList = await UserCredentials.findAll()
        res.json(userCredentialList)
    }catch(err){
        console.log(err);
    }
   
}

export const credentialById = async (req,res) => {
    const { id } = req.params
    try{
        const credentialId = await UserCredentials.findOne({
            where: {
              id,
            },
          });
          res.json(credentialId);
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createCredential = async  (req,res) => {
    const { username, password, employee_id } = req.body
    if( !username || !password || !employee_id ){
        return res.status(400).json({error: "Uno o más campos vacios"})
    }
    const createRegister = await UserCredentials.create({
        username, password, employee_id
    })
    res.status(200).json({message: "Register was created succesfully", createRegister})
}

export const deleteCredential = async (req,res) => {
    const { id } = req.params
    try{
         await UserCredentials.destroy({
            where: {
                id
            }
        })
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       }catch(err){
            console.error(err)
       }
}

export const editCredential = async (req,res) => {
    const { id } = req.params
    try {
        const { username, password, employee_id } = req.body
    
        const editRegister = await UserCredentials.findByPk(id)
        editRegister.username = username
        editRegister.password = password
        editRegister.employee_id = employee_id
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}