use employees;

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
('Accounting Assistant', 85000, 2)
('Human Resources Manager', 90000, 3),
('Human Resource Assistant', 80000, 3),
('I.T. Manager', 120000, 4),
('I.T. Assistant', 95000, 4),
('Security Manager', 65000, 5),
('Loss Provention', 45000, 5);