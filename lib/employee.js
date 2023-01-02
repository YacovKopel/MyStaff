
const inquirer = require('inquirer');
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
        // await inquirer
        //  .prompt([
        //    {
        //      type: 'input',
        //      message: 'What is the name of the Team Manager?',
        //      name: 'nameMan',
        //    },
        //    {
        //      type: 'input',
        //      message: 'Add the Team managers ID: ',
        //      name: 'idMan',
             
        //    },
        //    {
        //      type: 'input',
        //      message: 'Add the Team managers Email: ',
        //      name: 'emailMan',
        //    },
        //    {
        //    type: 'input',
        //    message: 'Add the Team managers office number: ',
        //    name: 'numMan',   
        //    }
       
        //  ])

        return "Employee"
    }

}

// const employer= new Employee()

// employer.getEmail()
// employer.getId()
// employer.getName()
// employer.getRole()

module.exports = Employee;