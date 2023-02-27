// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {

    constructor (employeeName, id, email, officeNumber) {
        // Call parameters from Employee constructor
        super(employeeName, id, email); 

        this.officeNumber = officeNumber;
    }

    // Get role method to return manager
    getRole () {
        return "Manager";
    }
}