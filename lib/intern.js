const Employee = require('./employee');


class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.schoolInt=school
    }
    getSchool(){
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports=Intern;
