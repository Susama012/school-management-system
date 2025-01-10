import jwt from "jsonwebtoken"
import { config } from "dotenv"
config();

export const verifyToken = (req, res, next) => {
    try {
        // console.log(req.headers);
        const token = req.headers["authorization"].split(" ")[1] //triming 1st word & 1st space
        if(!token) return res.status(400).send({ error : "token required"})
        //verify the token
        const data = jwt.verify(token, process.env.JWT_SECRET)
        if(!data.id) return res.status(400).send({ error : "token have invalid details" })
        console.log(data)
        //send the id for next middleware
        req.id = data.id
        //call the next function to re-direct to next middleware
        next()

    } catch (error) {
        return res.status(500).send({ error : "Something went wrong", msg : error.message })
    }
}