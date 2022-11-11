# be-challenge
This application developed using NodeJS, ExpressJS, Postgresql, JWT and many more.
there's a file named "be-test.postman_collection" that have all collection API needed to test this app.

Follow these steps to run and test this application.

1. first clone this repository
2. npm install to install all the necessary modules
3. Open PGADMIN for postgresql

  3.1 Create database with this command:
    "CREATE DATABASE salaries
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;"
    
  3.2 Create table salaries with this command:
    "CREATE TABLE public.salaries
     (id bigserial NOT NULL,
     name character varying(255),
     salary integer,
     currency character varying(255),
     department character varying(255),
     on_contract boolean,
     sub_department character varying(255),
     PRIMARY KEY (id));"
     
  3.3 create table users with this command:
    "CREATE TABLE public.users(
    id bigserial NOT NULL,
    username character varying(255),
    password character varying(255),
    PRIMARY KEY (id));"
    
   3.4 Insert these dummy datas with this command below:
   "INSERT INTO salaries(name, salary, currency, on_contract, department, sub_department) 
    VALUES( 'A1', 22000, 'USD', true, 'Engineer', 'DevOps'),
    ('A2', 12500, 'USD', true, 'Engineer', 'DevOps'),
    ('A3', 20000, 'USD', true, 'Engineer', 'DevOps'),
    ('A4', 22000, 'USD', false, 'Engineer', 'DevOps'),
    ('A5', 9000, 'USD', true, 'Engineer', 'DevOps'),
    ('A6', 52000, 'USD', true, 'Engineer', 'Developer'),
    ('A7', 29000, 'USD', false, 'Engineer', 'Developer'),
    ('A8', 2000, 'USD', true, 'Engineer', 'Developer'),
    ('A9', 68000, 'USD', true, 'Engineer', 'Developer'),
    ('A10', 31000, 'USD', true, 'Engineer', 'Developer'),
    ('B1', 1000, 'USD', true, 'Marketing', 'Designer'),
    ('B2', 7000, 'USD', true, 'Marketing', 'Designer'),
    ('B3', 23000, 'USD', false, 'Marketing', 'Designer'),
    ('B4', 33700, 'USD', true, 'Marketing', 'Designer'),
    ('B5', 42000, 'USD', true, 'Marketing', 'Designer'),
    ('B6', 19000, 'USD', true, 'Marketing', 'Promoter'),
    ('B7', 25000, 'USD', false, 'Marketing', 'Promoter'),
    ('B8', 2500, 'USD', true, 'Marketing', 'Promoter'),
    ('B9', 12000, 'USD', true, 'Marketing', 'Promoter'),
    ('B10', 22000, 'USD', true, 'Marketing', 'Promoter') RETURNING *;"
    ![pg](https://user-images.githubusercontent.com/49251756/201357312-baf12860-0104-4cec-a649-083b91755a62.PNG)

4.API Create User for login.![login](https://user-images.githubusercontent.com/49251756/201357526-644dd199-98cf-46a6-9fce-47053556092a.PNG)

5.API Login, if not login you won't be able to access the rest of the api. ![notAuthenticated](https://user-images.githubusercontent.com/49251756/201357874-10bac2bf-363b-4e93-8da7-f86fcd1d5444.PNG)
![login](https://user-images.githubusercontent.com/49251756/201357903-7a82f193-3460-4b3b-a57d-747d4686c172.PNG)

6. API Create Salary. ![createSalary](https://user-images.githubusercontent.com/49251756/201357966-46189fd3-d664-42d2-b88b-252971f7625f.PNG)

7. API Get all salary. ![getAllSalaries](https://user-images.githubusercontent.com/49251756/201358081-883f0ae8-e362-4cd8-9741-0ae63898c8e5.PNG)

8. API to fetch mean, min, max for salary over the entire database for provided financial year. ![salaryMeanMinMax](https://user-images.githubusercontent.com/49251756/201358174-ba47f9c4-4ccb-4b22-b2d8-19d4e6a731a9.PNG)

9. API to fetch mean, min, max for salary for records which satisfy on_contract true for provided financial year. ![salaryMeanMinMaxContract](https://user-images.githubusercontent.com/49251756/201358346-e6250534-14ba-460d-b480-e292f84e1c42.PNG)

10. API to fetch mean, min, max for salary for each department. ![salaryMeanMinMaxDepartment](https://user-images.githubusercontent.com/49251756/201358427-2b229a40-7ad2-41c5-ab8e-b275461688da.PNG)

11. An API to fetch mean, min, max for salary for each department and sub-department combination.  ![salaryMeanMinMaxDepartmentAndSubDepartment](https://user-images.githubusercontent.com/49251756/201358562-412f3fd4-db09-467c-83b5-a5b82970ab6e.PNG)

These all for the instruction and demo how to run and test this application. THANK YOU.


