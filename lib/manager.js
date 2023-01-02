const Employee = require('../lib/employee');


class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.numMan=officeNumber
    }
    
    getRole() {
      return "Manager"
    }
    getOfficeNumber(){
      return getOfficeNumber(this.numMan)
    }
            
            
    }


module.exports=Manager;
