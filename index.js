const inquirer=require("inquirer");
const { async } = require("rxjs");
const { getRole, connection } = require("./db");
const mysql=require('mysql2');

const db = require("./db");

function loadMainPrompts(){
    inquirer.prompt([
        {
          type: "list",
          name: "choice",
          message: "What would you like to do?",
          choices: [
            {
                name: "View All Employees",
                value: "VIEW_EMPLOYEES"
            },
            {
                name:"Add Employee",
                value:"ADD_EMPLOYEES"
            },
            {
                name:"Update Employee Role",
                value:"UPDATE_EMPLOYEE"
            },
            {
                name:"View All Roles",
                value:"VIEW_ROLES"
            },
            {
                name:"Add Role",
                value:"ADD_ROLE"
            },
            {
                name:"View All Departments",
                value:"VIEW_DEPARTMENTS"
            },
            {
                name:"Add Department",
                value:"ADD_DEPARTMENT"
            },
            {
                name:"Quit",
                value:"QUIT"
            }
    
            
          ]
        }
      ])
      .then(res => {


    loadMainPrompts()
