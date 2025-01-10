import { model } from "mongoose";
import studentSchema from "../schema/student.schema";


const Student = model("student", studentSchema)

export default Student;