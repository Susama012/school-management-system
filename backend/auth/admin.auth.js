import Admin from "../models/admin.models.js"
import { generateToken } from "../utils/jwt.js"
import { sendOtpMail } from "../utils/nodemailer.js"
import { generateOtp } from "../utils/otp.js"


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
               } else {
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


export const forgetPassword = async(req, res) => {
    try {
        const { email } = req.body  
        if(!email) return res.status(400).send({ error : "Provide the email address"})
        const isAdmin = await Admin.findOne({ email })
        if(isAdmin) {
          //if otp is alresdy created wait for 30sec before creating next one
           if(isAdmin.otp){
            const timeLimit = ( 30 * 1000 ) >= (Date.now() - isAdmin.otpCreatedAt)
            if(timeLimit){
                return res.status(429).send({ error : "Too many otp requests wait for 30sec before next"})
            }
           }
          //generate the otp
          let otp = generateOtp()

          //send the otp in user Email
          await sendOtpMail ({ to: isAdmin.email, otp })

          //save the otp in database
          isAdmin.otp = otp;
          isAdmin.otpCreatedAt = Date.now();
          await isAdmin.save()
          res.status(201).send({ message : "OTP sent to the email address"})
        } else {
          res.status(400).send({ error : "Admin email not found" })
        }
    } catch (error) {
        res.status(500).send({ error : "Something went wrong", msg : error.message })
    }
}

export const verifyOTP = async (req, res) => {
    try {
        const { otp, email } = req.body
        if (!email || !otp) return res.status(400).send({ error: "Provide all fields" })
        const isAdmin = await Admin.findOne({ email })
        if (!isAdmin) return res.status(401).send({ error: "Admin email not found" });
        else {
            if (!isAdmin.otp) return res.status(400).send({ error: "Generate the otp first" });
            else {
                const isExpired = (Date.now() - isAdmin.otpCreatedAt) >= (1000 * 60 * 5)
                if (isExpired) return res.status(403).send({ error: "Otp expired generate again" });
                else {
                    if (isAdmin.otp === otp) {
                        //remove the otp and otpCreatedAt from database
                        isAdmin.otp = null;
                        isAdmin.otpCreatedAt = null;
                        await isAdmin.save()
                        //send the auth token to the user
                        const token = generateToken({ id: isAdmin._id })
                        return res.status(200).send({ token })
                    }
                    else {
                        return res.status(400).send({ error: "Invalid otp" })
                    }
                }
            }
        }
    } catch (error) {
        res.status(500).send({ error: "Something Went Wrong", msg: error.message })
    }
}

export const changePassword = async(req, res) => {
  try {
    // console.log(req.id)
    const { id } = req
    const { newPassword } = req.body
    if(!id || !newPassword) return res.status(400).send({ error: "Provide all fields required "});
    else {
        
        const isAdmin = await Admin.findById(id)
        // console.log(isAdmin)
        if(!isAdmin) return res.status(401).send({ error : " Admin data not matched"});
        else{
        //update the admin password
        isAdmin.$set({ password : newPassword })
        await isAdmin.save()
        return res.status(200).send({ message: "Password updated successfully" })
        }
    }
  } catch (error) {
    res.status(500).send({ error : "Something went Wrong", msg : error.message })
  }
}