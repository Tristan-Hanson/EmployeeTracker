USE employee_db;

INSERT INTO department(name)
VALUES("Sales"),("Human Resources"),("Accounting"),("IT"),("Production");

INSERT INTO role(title, salary, department_id)
VALUES
("Sales Manager", 100000, 1),
("Sales Intern", 50000, 1),
("HR Manager", 93000, 2),
("HR Intern", 43000, 2),
("Accounting Manager", 150000, 3),
("Accounting Intern", 80000, 3),
("IT Manager", 120000, 4),
("IT Intern", 85000, 4),
("Production Manager", 60000, 5),
("Production Intern", 30000, 5);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
("Tristan", "Hanson", 1, NULL)
("Darion", "Hanson", 1, NULL)
("Mason", "Hanson", 1, NULL)
("Madeline", "Hanson", 1, NULL)
("Bishop", "Hanson", 1, NULL)
("Chase", "Kielmeyer", 1, NULL)
("Rilynn", "Kielmeyer", 1, NULL)
("Brody", "Kielmeyer", 1, NULL)
("Heather", "Kielmeyer", 1, NULL)
("Scott", "Kielmeyer", 1, NULL)

