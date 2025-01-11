import Admin from "../models/admin.models.js"
import Student from "../models/student.models.js"

export const addStudent = async(req, res) => {
   try {
    const { id } = req
    const isAdmin = await Admin.findById( id )
    if(!isAdmin) return res.status(401).send("Admin athentication failed")
    else {
       // add student doccument in student model
       try {
        const studentData = new Student(req.body)
        await studentData.save()
        return res.status(201).send({ message : "Student account created successfully" })
       } catch (error) {
        return res.status(400).send({ error : "Student validation failed", msg : error.message })
       }
    }
   } catch (error) {
    return res.status(500).send({ error : "Something went wrong", msg : error.message})
   }
}