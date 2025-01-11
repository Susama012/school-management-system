import { model } from "mongoose";
import studentSchema from "../schema/student.schema.js";


const Student = model("student", studentSchema)

export default Student;