const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllEmployees() {
    return this.connection.promise().query(
      "SELECT * FROM employee JOIN role ON employee.role_id=role.id JOIN department ON role.department_id=department.id;"
    );
  }

  findAllDepartments(){
    return this.connection.promise().query(
      "SELECT * FROM employees_db.department;"
    );
  }

  findAllRoles(){
    return this.connection.promise().query(
      "SELECT * FROM employees_db.role;"
    );
  }

  makeDep(data){

    return this.connection.promise().query(
      "INSERT INTO department (name) VALUES (?);",data.addDepartment)
      
  }

  makeRole(res){
    return this.connection.promise().query(
      "INSERT INTO role (title,salary,department_id) VALUES (?,?,?);",[res.title, res.salary, res.department_id]
      );
  }

  makeEmployee(resEmp){
    return this.connection.promise().query(
      "INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?);",[resEmp.first_name, resEmp.last_name, resEmp.role, resEmp.manager_id]
    );
  }

  updateEmployee(rup){
    return this.connection.promise().query(
      "UPDATE employee SET role_id=? WHERE first_name=? AND last_name=?;",[rup.firstName, rup.lastName, rup.role]
    );
  } 
}
module.exports = new DB(connection);