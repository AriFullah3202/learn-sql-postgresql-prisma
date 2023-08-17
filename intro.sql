
-- ডাটাবেজ create , delete , updata করা ।

-- DROP DATABASE test2;
-- CREATE DATABASE test2
-- ALTER DATABASE test RENAME TO test3


DROP TABLE courses;
CREATE TABLE courses (
    coursesID SERIAL PRIMARY KEY ,
    coursesName VARCHAR(255) NOT NULL ,
    description VARCHAR(255),
    pulicationDate DATE
);
SELECT * FROM courses;
TRUNCATE TABLE courses;
INSERT INTO courses(coursesname, description , pulicationdate)
VALUES
  ('prostgress for development', 'A complete postgress for developter', '2020-08-04'),
  ('prostgress administration', 'A postgress guide for dna' , '2020-08-05'),
  ('prostgress for high performance', 'A complete postgress for developter', '2020-08-04'),
  ('prostgress bootcamp', 'A postgress guide for dna' , '2020-08-05'),
  ('prostgress for mastering', 'A complete postgress for developter', '2020-08-04');






  CREATE TABLE if NOT EXISTS Employees(
    empID SERIAL PRIMARY KEY,
    name text not null,
    email text not null,
    salary integer not null,
    joining_date date not null,
    deptID integer ,
    CONSTRAINT fk_dept_emp
       FOREIGN KEY(deptID)
       REFERENCES department(deptID)
  );
create table if NOT EXISTS department (
    deptID SERIAL PRIMARY KEY,
    deptName VARCHAR(50)
);

INSERT INTO department(deptName) VALUES
    ('HR'),
    ('Finance'),
    ('Engineering'),
    ('Marketing');

-- Insert data into Employees table
INSERT INTO Employees (name, email, salary, joining_date, deptID) VALUES
    ('John Doe', 'john@example.com', 50000, '2023-01-15', 1),
    ('Jane Smith', 'jane@example.com', 60000, '2022-09-10', 2),
    ('Michael Johnson', 'michael@example.com', 75000, '2023-03-20', 3),
    ('Emily Williams', 'emily@example.com', 55000, '2021-11-05', 2),
    ('Robert Brown', 'robert@example.com', 70000, '2022-05-30', 3),
    -- Add more records here
    ('Sarah Lee', 'sarah@example.com', 65000, '2023-06-18',NULL),
    ('David Clark', 'david@example.com', 80000, '2022-02-25', NULL),
    ('Olivia Martin', 'olivia@example.com', 60000, '2021-08-12' ,3 ),
    ('William Taylor', 'william@example.com', 72000, '2023-04-03', 3),
    -- Add more records here
    ('Ava Anderson', 'ava@example.com', 58000, '2022-11-14', 1);

DROP TABLE Employees;
DROP TABLE department;

SELECT * FROM department;
SELECT * FROM Employees;
SELECT * FROM Employees WHERE name <> 'john Doe' AND salary > 70000 OR name  = 'Jane Smith';
SELECT * FROM Employees LIMIT 3 OFFSET 4;
-- IN, NOT, BETWEEN , LIKE
SELECT * FROM Employees WHERE empid IN (11, 12, 13 , 14 , 15);
UPDATE Employees SET salary = 1000 WHERE empid IN (13 , 14 , 15);

select * from Employees where empid not in (2 , 3, 5 , 8);
select * from Employees where salary BETWEEN 1000 AND 60000;
select * from Employees where name LIKE '%J%';
select * from Employees where name LIKE '______o_';
select * from Employees where name LIKE 'J%h';
-- null searching
select * from Employees where name IS NULL;

-- Joining TABLE
-- inner join
select e.name , e.email , d.deptname from Employees as e
INNER JOIN department as d ON d.deptid = e.deptid;
-- left outer join
select * from Employees as e
LEFT JOIN department as d ON d.deptid = e.deptid WHERE name LIKE '%J%';
-- right outer join
select * from Employees as e
RIGHT JOIN department as d ON d.deptid = e.deptid;
select * from Employees as e
FULL JOIN department as d ON d.deptid = e.deptid;

--- outer JOIN

-- max salary
select COUNT(salary) AS counte FROM Employees WHERE name LIKE '%J%';

select e.deptid, avg(d.deptid) , sum(d.deptid) from Employees as e FULL JOIN department as d ON d.deptid = e.deptid GROUP BY e.deptid;


select * from employees where salary = (select max(salary) from employees);

SELECT AVG(salary) FROM employees;
SELECT email, (SELECT AVG(salary) FROM employees)
FROM employees;

-- View
CREATE VIEW email AS select email from employees;
select * from email;

select table products (
    id serial PRIMARY KEY,
    title varchar(255) NOT NULL,
    base_price float8 NOT NULL,
    final_price float8
);

insert into prducts (id, title, base_price) VALUES (1 , 'mango' , 30);


select * from products;

explain ANALYSE select * from employees;

create index name_idx on employees(name);