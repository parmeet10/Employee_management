import mongoose from "mongoose";
const {Schema} = mongoose;
const employeeSchema = new Schema({
    Ename: {
        type: String,
        required: true
    },
    Eaddress: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    doj: {
        type: Date,
        required: true
    },
    dor: {
        type: Date
    }
})
const Employee = mongoose.model("Employee",employeeSchema)
export default Employee;
