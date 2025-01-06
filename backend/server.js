import express from "express"
import { config } from "dotenv";
import cors from "cors"
import morgan from "morgan";
import dbConnect from "./config/dbConfig.js";
import adminRouter from "./routes/admin.routes.js";
import studentRouter from "./routes/student.routes.js";
import teacherRouter from "./routes/teacher.routes.js";

config() //env configuration

const app = express();

//middlewares
app.use(express.json())  //json parser
app.use(express.urlencoded({ extended : true }))  //url data parser
app.use(cors()) //cors policy midlleware
app.use(morgan("dev")) //http request/response logger

//demo API
app.get("/", (req, res) => res.send("SERVER IS WORKING"))


//routes
app.use("/admin", adminRouter)
app.use("/student", studentRouter)
app.use("/teacher", teacherRouter)

const PORT = process.env.PORT || 80
const hostname = process.env.HOST_NAME || "localhost"

app.listen(PORT, hostname, () => {
    dbConnect(); //calling the database connection function
    console.log("server running at http://" + hostname + ":" + PORT);
})