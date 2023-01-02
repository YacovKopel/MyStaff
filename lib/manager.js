const Employee = require('../lib/employee');

const inquirer = require('inquirer');
const fs = require('fs');


class Manager extends Employee {
    constructor(nameMan, idMan, emailMan, numMan){
        const name= nameMan
        const id=idMan
        const email=emailMan
        const officeNumber=numMan
        super(name, id, email, officeNumber)
        this.name=name
        this.id=id
        this.email=email
        this.officeNumber=officeNumber
      
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole() {
            inquirer
              .prompt([
                {
                  type: 'input',
                  message: 'What is the name of the Team Manager?',
                  name: 'nameMan',
                },
                {
                  type: 'input',
                  message: 'Add the Team managers ID: ',
                  name: 'idMan',
                  
                },
                {
                  type: 'input',
                  message: 'Add the Team managers Email: ',
                  name: 'emailMan',
                },
                {
                type: 'input',
                message: 'Add the Team managers office number: ',
                name: 'numMan',   
                }
            
              ])
              .then((response) =>{
              let words=
            
            `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            
                <title>Employee</title>
            </head>
            
            <body>
                <header>
                    <h1 style="text-align: center; background-color: aqua; color:darkviolet; padding: 30px 0px; width:100% ;">My Company</h1>
            
                </header>
                <section class="container">
                <div class="row justify-content-around">
                <div class="card col-lg-3 col-md-5 col-sm-12 p-0 my-5 border-radius-10px" style="width: 18rem;">
                    <div class="card-body bg-primary text-white">
                      <h5 class="card-title ">${response.nameMan}</h5>
                      <p class="card-text">Manager 👨‍💼</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${response.idMan}</li>
                      <li class="list-group-item"><a href="#" class="card-link">${response.emailMan}</a></li>
                      <li class="list-group-item">${response.numMan}</li>
                    </ul>
                  </div>
                </div>
                </section>
            
                  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </body>
            </html>
            `
            
                fs.writeFile('index.html',words , err => {
                if (err) {
                  console.error(err);
                }
              })});
              return "Manager"
            }
            
            
    }
const manager= new Manager()
console.log(manager)

manager.getRole()

module.exports=Manager;