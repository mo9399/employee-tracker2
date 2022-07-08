require("dotenv").config();
const inquirer = require("inquirer");
const db = require("./db/connection.js");
const console = require("console.table");

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  userOptions();
});

// User prompts through CLI
const userOptions = () => {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "options",
          message: "what would you like to do?",
          choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Remove a department",
            "Add a role",
            "Remove a role",
            "Add an employee",
            "Remove an employee",
            "Update an employee role",
            "Exit",
          ],
        },
    ]) 
 
     .then((res) => {
    let choice = res.options;
    switch (choice) {
      case "View all departments":
        viewDepartments();
        break;
      case "View all roles":
        viewRoles();
        break;
      case "View all employees":
        viewEmployees();
        break;
      case "Add a department":
        addDepartment();
        break;
      case "Remove a department":
        removeDepartment();
        break;
      case "Add a role":
        addRole();
        break;
      case "Remove a role":
        removeRole();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Remove an employee":
        removeEmployee();
        break;
      case "Update an employee role":
        updateEmployeeRole();
        break;
      default:
        exit();
    }
  });
}; 

// View Departments
const viewDepartments = () => {
    db.query(`SELECT department.id, department.name AS department FROM department;`,
    (err, res) => {
      if (err) throw err;
      console.tabe(res);
  
      userOptions();
    });
  };

// View roles
const viewRoles = () => {
    db.query(
      `SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;`,
      (err, res) => {
        if (err) throw err;
        console.table(res);
  
        userOptions();
      }
    );
  };

// View employees
const viewEmployees = () => {
    db.query(
      `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`,
      (err, res) => {
        if (err) throw err;
        console.table(res);
  
        userOptions();
      }
    );
  };

// Add department
const addDepartment = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Department name:",
        },
      ])
      .then((res) => {
        let name = res;
        const sql = `INSERT INTO department (name) VALUES (?)`;
        const params = name.name;
        db.query(sql, params, (err, result) => {
          if (err) throw err;
          console.log(`Added ${name.name} to departments.`);
  
          userOptions();
        });
      });
  };  

// Delete department
const removeDepartment = () => {
    db.query(`SELECT * FROM department`, (err, departmentRes) => {
      if (err) throw error;
      const departmentChoices = [];
      departmentRes.forEach(({ id, name }) => {
        departmentChoices.push({
          name: name,
          value: id,
        });
      });
      inquirer
        .prompt({
          type: "list",
          name: "departmentId",
          message: "What department would you like to remove?",
          choices: departmentChoices,
        })
        .then((res) => {
          departmentId = res.departmentId;
          db.query(
            `DELETE FROM department WHERE id = ?`,
            departmentId,
            (err, res) => {
              if (err) throw err;
              console.log("The department has been removed.");
  
              userOptions();
            }
          );
        });
    });
  };  
  