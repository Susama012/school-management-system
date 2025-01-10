import { Router } from "express"
import { adminLogin, changePassword, forgetPassword, verifyOTP } from "../auth/admin.auth.js"
import { verifyToken } from "../middlewares/tokenVerify.js"

const adminRouter = Router()

//api

//demo
adminRouter.get("/", (req, res) => res.send("admin router is working"))

//login
adminRouter.post("/login", adminLogin)  

//forget password(generate OTP)
adminRouter.post("/otp/create", forgetPassword)

//verify password
adminRouter.post("/otp/verify", verifyOTP)

//change password
adminRouter.post("/changepassword", verifyToken, changePassword)
//add student

//add teacher


export default adminRouter;