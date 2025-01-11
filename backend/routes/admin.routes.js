import { Router } from "express"
import { adminLogin, changePassword, forgetPassword, verifyOTP } from "../auth/admin.auth.js"
import { verifyToken } from "../middlewares/tokenVerify.js"
import { addStudent } from "../controllers/admin.controllers.js"

const adminRouter = Router()

//api

//demo
adminRouter.get("/", (req, res) => res.send("admin router is working"))

//login
adminRouter.post("/login", adminLogin)  //http://127.0.0.4:4000/admin/login

//forget password(generate OTP)
adminRouter.post("/otp/create", forgetPassword) //http://127.0.0.4:4000/admin/otp/create

//verify password
adminRouter.post("/otp/verify", verifyOTP)  //http://127.0.0.4:4000/admin/otp/verify

//change password
adminRouter.post("/changepassword", verifyToken, changePassword)  //http://127.0.0.4:4000/admin/changepass

//add student
adminRouter.post("/add/student", verifyToken,addStudent)  //http://127.0.0.4:4000/admin/add/student

//add teacher


//update studebt


//update teacher


//delete student


//get all students list


//get all teachers list


export default adminRouter;