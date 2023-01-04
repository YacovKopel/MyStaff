const inquirer = require('inquirer');
const fs = require('fs');

const hireManager = () => {
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
          <li class="list-group-item">ID: ${response.idMan}</li>
          <li class="list-group-item">Email: <a href="mailto: ${response.emailMan}" class="card-link">${response.emailMan}</a></li>
          <li class="list-group-item">Office Number: ${response.numMan}</li>
        </ul>
      </div>`
    


    fs.writeFile('index.html',words , err => {
    if (err) {
      console.error(err);
    }
  })
newHire();

});
  
}

const newHire = () => {
    inquirer
      .prompt([
        {
          type: 'list',
          message: 'Select to add an "Intern", "Engineer", or "No more employees" ',
          name: 'choice',
          choices:["Intern", "Engineer", "No more employees" ]
        }
    ])
    .then((response) =>{
    if (response.choice === "Engineer"){
        hireEngineer();
    }
    else if(response.choice === "Intern"){
        hireIntern();
    }
    else if(response.choice === "No more employees"){
        endOfHtml()}
});}


const hireEngineer = () => {
    inquirer
      .prompt([
           {
            type: 'input',
            message: 'You selected Engineer. Please add their name: ',
            name: 'nameEng',
            
            },
            {
            type: 'input',
            message: 'Add the Engineers ID: ',
            name: 'idEng',
            
            },
            {
            type: 'input',
            message: 'Add the Engineers Email: ',
            name: 'emailEng',
            },
            {
            type: 'input',
            message: 'Add the Engineer Github: ',
            name: 'githubEng',
            
            }
    
      ])
      .then((response) =>{
        
      let words=
    
    `
    <div class="card col-lg-3 col-md-5 col-sm-12 p-0 my-5" style="width: 18rem;">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title ">${response.nameEng}</h5>
            <p class="card-text">Engineer 👨‍💻</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${response.idEng}</li>
            <li class="list-group-item">Email: <a href="mailto: ${response.emailEng}" class="card-link">${response.emailEng}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${response.githubEng}" class="card-link">${response.githubEng}</a></li>
        </ul>
    </div>`

        fs.appendFile('index.html',words , err => {
        if (err) {
          console.error(err);
        }
      })
    newHire()
    });
      
    }

    const hireIntern = () => {
        inquirer
          .prompt([
            {
            type: 'input',
            message: 'You selected Intern, Please add their name: ',
            name: 'nameInt',
            
            },
            {
            type: 'input',
            message: 'Add the Interns ID: ',
            name: 'idInt',
            
            },
            {
            type: 'input',
            message: 'Add the Interns Email: ',
            name: 'emailInt',
            },
            {
            type: 'input',
            message: 'Add the Interns School: ',
            name: 'schoolInt',
            
            }
        
          ])
          .then((response) =>{
       
          let words=
        
        `
        <div class="card col-lg-3 col-md-5 col-sm-12 p-0 my-5" style="width: 18rem;">
          <div class="card-body bg-primary text-white">
            <h5 class="card-title ">${response.nameInt}</h5>
            <p class="card-text">Intern 👨‍🎓</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${response.idInt}</li>
            <li class="list-group-item">Email: <a href="mailto: ${response.emailInt}" class="card-link">${response.emailInt}</a></li>
            <li class="list-group-item">School: ${response.schoolInt}</li>
          </ul>
        </div>`
    
            fs.appendFile('index.html',words , err => {
            if (err) {
              console.error(err);
            }
          })
        newHire()
        });
          
        }


const endOfHtml = () => {
    let words=
        
    `
        </div>
        </section>
    
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
    </html>`

        fs.appendFile('index.html',words , err => {
        if (err) {
          console.error(err);
        }
      })

}


hireManager();
































































































//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  
//       <title>Employee</title>
//   </head>
  
//   <body>
//       <header>
//           <h1 style="text-align: center; background-color: aqua; color:darkviolet; padding: 30px 0px; width:100% ;">My Company</h1>
  
//       </header>
//       <section class="container">
//       <div class="row justify-content-around">
//       <div class="card col-lg-3 col-md-5 col-sm-12 p-0 my-5 border-radius-10px" style="width: 18rem;">
//           <div class="card-body bg-primary text-white">
//             <h5 class="card-title ">${response.nameMan}</h5>
//             <p class="card-text">Manager 👨‍💼</p>
//           </div>
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">${response.idMan}</li>
//             <li class="list-group-item"><a href="#" class="card-link">${response.emailMan}</a></li>
//             <li class="list-group-item">${response.numMan}</li>
//           </ul>
//         </div>
//         <div class="card col-lg-3 col-md-5 col-sm-12 p-0 my-5" style="width: 18rem;">
//           <div class="card-body bg-primary text-white">
//             <h5 class="card-title ">${response.nameEng}</h5>
//             <p class="card-text">Engineer 👨‍💻</p>
//           </div>
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">${response.idEng}</li>
//             <li class="list-group-item"><a href="#" class="card-link">${response.emailEng}</a></li>
//             <li class="list-group-item"><a href="#" class="card-link">${response.githubEng}</a></li>
//           </ul>
//         </div>
//         <div class="card col-lg-3 col-md-5 col-sm-12 p-0 my-5" style="width: 18rem;">
//           <div class="card-body bg-primary text-white">
//             <h5 class="card-title ">${response.nameInt}</h5>
//             <p class="card-text">Intern 👨‍🎓</p>
//           </div>
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">${response.idInt}</li>
//             <li class="list-group-item"><a href="#" class="card-link">${response.emailInt}</a></li>
//             <li class="list-group-item">${response.schoolInt}</li>
//           </ul>
//         </div>
//       </div>
//       </section>
  
//         <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
//   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
//   </body>
//   </html>