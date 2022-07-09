Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@mo9399 
mo9399
/
employee-tracker2
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
employee-tracker2/db/seeds.sql

your name add viewRole function to server.js
Latest commit 2557333 5 hours ago
 History
 1 contributor
35 lines (32 sloc)  901 Bytes

use employees2;

INSERT INTO department (name)
VALUES
 ('Manger'),
 ('Security'),
 ('Human Resources'),
 ('I.T.'),
 ('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES 
('Manager', 120000, 1),
('Assistant Manger', 75000, 1),
('Accounting Manager', 100000, 2),
('Accounting Assistant', 85000, 2),
('Human Resources Manager', 90000, 3),
('Human Resource Assistant', 80000, 3),
('I.T. Manager', 120000, 4),
('I.T. Assistant', 95000, 4),
('Security Manager', 65000, 5),
('Loss Provention', 45000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Micheal', 'Jordan', 1, NULL),
  ('Kobe', 'Bryant', 2, 1),
  ('Scottie', 'Pippen', 3, NULL),
  ('Lebron', 'James', 4, 3),
  ('Damian', 'Lillard', 5, NULL),
  ('Magic', 'Johnson', 6, 5),
  ('Tracy', 'McGrady', 7, NULL),
  ('Allen', 'Iverson', 8, 7),
  ('Dwayne', 'Wade', 9, NULL),
  ('Larry', 'Bird', 10, 9); 
