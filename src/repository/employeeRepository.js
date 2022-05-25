import Employee from "../models/employeeSchema.js";
class EmployeeRepository {
    constructor() { }
    async save(
        Ename,
        Eaddress,
        designation,
        doj
    ) {
        const employee = await Employee.create({
            Ename,
            Eaddress,
            designation,
            doj
        });
        return employee;

    }
    async findByEnameAndEaddress(
        Ename,
        Eaddress,
    ) {
        const employee = await Employee.find({ $and: [{ Ename: Ename }, { Eaddress: Eaddress }] })
        return employee;
    }



    async find() {
        const employee = await Employee.find().lean()
        return employee;
    }


    async deleteByEnameAndEaddress(
        Ename,
        Eaddress,
        dor
    ) {
        const employee = await Employee.findOneAndUpdate({ $and: [{ Ename: Ename }, { Eaddress: Eaddress }] }, { dor: dor })
        return employee;
    }


    async adressUpdate(
        Ename,
        Eaddress,
        newEaddress,
    ) {
        const employee = await Employee.findOneAndUpdate({ $and: [{ Ename: Ename }, { Eaddress: Eaddress }] }, { Eaddress: newEaddress })
        return employee;
    }


    async findResignedEmployee() {
        //const employee = await Employee.find({dor:${}})
    }


    async findByEnameAndDesignation(
        Ename,
        designation
    ) {
        let employee = await Employee.findOne({ $and: [{ Ename: Ename }, { designation: designation }] })
        return employee;
    }

    async designationUpdate(
        Ename,
        currentDesignation,
        newDesignation
    ) {
        const employee = await Employee.findOneAndUpdate({ $and: [{ Ename: Ename }, { designation: currentDesignation }] }, { designation: newDesignation })
        return employee;
    }

    async employeeCount(){
        const employee = await Employee.count();
        return employee;
    }
}
export default EmployeeRepository;