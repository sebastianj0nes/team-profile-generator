// TODO: Write code to define and export the Employee class
// Employee class
class Employee{
    // Constructor with employeeName,id,email parameters
    constructor (name, id, email){
        // Setting name,id,email values
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Get Methods
    getName () {
        return this.name;
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
