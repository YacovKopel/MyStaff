

class Employee{
    constructor(name, id, email){
        this.name=name;
        this.id=id;
        this.email=email
    }
    getName(){
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole() {
        return "Employee"
    }

}

const employer= new Employee()

employer.getEmail()
employer.getId()
employer.getName()
employer.getRole()

module.exports = Employee;