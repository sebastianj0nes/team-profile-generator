// TODO: Write code to define and export the Employee class
// Employee class
class Employee{
    // Constructor with employeeName,id,email parameters
    constructor (employeeName, id, email){
        // Setting employeeName,id,email values
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }

    // Get Methods
    getName () {
        return this.employeeName;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole (){
        return "Employee";
    }
}


// Export Employee class
module.exports = Employee;
