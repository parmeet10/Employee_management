import EmployeeRepository from "../repository/employeeRepository.js";
class EmployeeController {
    constructor(
    ) {

    }
    async signup(req, res) {
        let date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        try {
            const {
                Ename,
                Eaddress,
                designation,
                doj,
            } = req.body;
            if (!Ename || Ename.length < 2 || Ename.lengh > 40) {
                throw new Error("inappropriatee Employee name")
            }
            if (!Eaddress || Eaddress.length < 2 || Eaddress.lengh > 40) {
                throw new Error("inappropriatee Employee address")
            }
            if (!designation || designation.length < 2 || designation.lengh > 40) {
                throw new Error("inappropriatee Employee designation")
            }
            if (!(date_regex.test(doj))) {
                throw new Error("inappropriatee Employee date of joining")
            }
            let _Ename = Ename.toLowerCase();
            let _Eaddress = Eaddress.toLowerCase();
            let _designation = designation.toLowerCase();
            const employeeDetail = await new EmployeeRepository().findByEnameAndEaddress(_Ename, _Eaddress);
            if (employeeDetail.length) {
                throw new Error("Employee already exists")
            }
            const employee = await new EmployeeRepository().save(_Ename, _Eaddress, _designation, doj)
            return res.status(200).send({ data: { id: employee.id, name: employee.Ename }, message: "Employee saved successfully" });
        }
        catch (err) {
            console.log(err)
            return res.status(401).send(err.message)
        }
    }

    async employeeDetail(req, res) {

        try {
            const employee = await new EmployeeRepository().find();
            return res.status(200).send({ data: employee, message: "employee detailed fetched successfully" })
        }
        catch (err) {
            console.log(err)
            return res.status(401).send(err.message)
        }
    }
    async employeeDeletion(req, res) {
        let date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        let currentDate = new Date;
        try {
            const {
                Ename,
                Eaddress,
                dor,
            } = req.body;
            if (!Ename || Ename.length < 2 || Ename.lengh > 40) {
                throw new Error("inappropriatee Employee name")
            }
            if (!Eaddress || Eaddress.length < 2 || Eaddress.lengh > 40) {
                throw new Error("inappropriatee Employee address")
            }
            if (!(date_regex.test(dor))) {
                throw new Error("inappropriatee Employee date of relieving")
            }
            let _dor = new Date(dor);
            if (_dor > currentDate) {
                throw new Error('invalid date');
            }

            let _Ename = Ename.toLowerCase();
            let _Eaddress = Eaddress.toLowerCase()
            const employeeDetail = await new EmployeeRepository().findByEnameAndEaddress(_Ename, _Eaddress)
            if (!(employeeDetail.length)) {
                throw new Error("Employee not found");
            }
            const employee = await new EmployeeRepository().deleteByEnameAndEaddress(_Ename, _Eaddress, _dor);

            return res.status(200).send({ data: employee, message: "employee deleted successfully" });
        }
        catch (err) {
            console.log(err);
            return res.status(401).send(err.message);
        }

    }
    async addressUpdate(req, res) {
        try {
            const {
                Ename,
                currentEaddress,
                newEaddress
            } = req.body;
            if (!Ename || Ename.length < 2 || Ename.lengh > 40) {
                throw new Error("inappropriatee Employee name")
            }
            if (!currentEaddress || currentEaddress.length < 2 || currentEaddress.lengh > 40) {
                throw new Error("inappropriatee Employee current address")
            }
            if (!newEaddress || newEaddress.length < 2 || newEaddress.lengh > 40) {
                throw new Error("inappropriatee Employee new address")
            }
            let _Ename = Ename.toLowerCase();
            let _currentEaddress = currentEaddress.toLowerCase()
            let _newEaddress = newEaddress.toLowerCase()
            let employeeDetail = await new EmployeeRepository().findByEnameAndEaddress(_Ename, _currentEaddress);
            if (!(employeeDetail.length)) {
                throw new Error("Employee not found");
            }
            await new EmployeeRepository().adressUpdate(_Ename, _currentEaddress, _newEaddress);
            employeeDetail = await new EmployeeRepository().findByEnameAndEaddress(_Ename, _newEaddress);

            return res.status(200).send({ data: employeeDetail, message: "employee adress updated successfully" })
        }
        catch (err) {
            console.log(err);
            return res.status(401).send(err.message);
        }

    }

    async removeEmployee(req, res) {

        try {
            const employee = await new EmployeeRepository().find();
            return res.status(200).send({employee})
        }
        catch (err) {
            console.log(err)
            return res.status(401).send(err.message);
        }
    }
    async employeePromotion(req, res) {
        try {
            const {
                Ename,
                currentDesignation,
                newDesignation
            } = req.body;
            if (!Ename || Ename.length < 2 || Ename.lengh > 40) {
                throw new Error("inappropriatee Employee name");
            }
            if (!currentDesignation || currentDesignation < 2 || currentDesignation > 40) {
                throw new Error("inappropriatee Employee designation");
            }
            if (!currentDesignation || currentDesignation < 2 || currentDesignation > 40) {
                throw new Error("inappropriatee Employee designation");
            }
            let _designation = currentDesignation.toLowerCase();
            let _Ename = Ename.toLowerCase();
            let _newDesignation = newDesignation.toLowerCase();
            const employee = await new EmployeeRepository().findByEnameAndDesignation(_Ename, _designation);
            if (!employee) {
                throw new Error('Employee not found');
            }
            await new EmployeeRepository().designationUpdate(_Ename, _designation, _newDesignation);
            const promotedEmployee = await new EmployeeRepository().findByEnameAndDesignation(_Ename, _newDesignation);
            return res.status(200).send({ data: promotedEmployee, message: "Employee Promotion Successfull" });
        }
        catch (err) {
            console.log(err)
            res.status(401).send(err.message);
        }
    }
    async employeeCount(req, res) {
        try {
            const employee = await new EmployeeRepository().employeeCount();
            res.status(200).send({ data: employee, message: "operation successful" });
        }
        catch (err) {
            console.log(err)
            res.status(err.message);
        }
    }
}

export default EmployeeController;