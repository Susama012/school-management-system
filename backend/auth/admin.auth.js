import Admin from "../models/admin.models.js"
import { generateToken } from "../utils/jwt.js"

export const adminLogin = async(req, res) => {
    try {
        const { email, password } = req.body
        //check all the fields
        if (!email || !password) {
            return res.status(400).send({ error : "Provide all requred fields" })
        } else {
            //check the admin is available or not
            let isAdmin = await Admin.findOne({ email })
            console.log(isAdmin);
            
            if(isAdmin) {
               //match the passwords
               if(isAdmin.password == password) {    
                //send the auth token
                let token = generateToken({ id: isAdmin._id })
                return res.status(200).send({ token })
               }else{
                return res.status(401).send({ error : "Paswword is not matching "})
               }
            }else{
                return res.status(400).send({ error : "Email address not matched "})
            }
        }
    } catch (error) {
        res.status(500).send({ message : "Something went wrong", error : error.message })
    }
}
