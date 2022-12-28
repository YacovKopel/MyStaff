class Employee{
    constructor(name, id, email){
        this.name=name;
        this.id=id;
        this.email=email
    }
    getName(){
        return this.getName
    }
    getID() {
        return this.getID
    }
    getEmail(){
        return this.getEmail
    }
    getRole() {
        return "Employee"
    }

}

class Manager extends Employee {
    constructor(officeNumber){

    super(name, id, email)
    this.officeNumber=officeNumber
    }
    getRole() {

        return "Manager"
    }
}

class Engineer extends Employee {
    constructor(github){
    super(name, id, email);
    this.github=github;
    }
    getGithub(){
        return this.github
    }
    getRole() {

        return "Engineer"
    }
}

class Intern extends Employee {
    constructor(school){
    super(name, id, email)
    this.school=school
    }
    getSchool(){
        return this.school
    }
    getRole() {

        return "Intern"
    }
}