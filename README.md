# be-challenge

1. first pull this repository
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

4. Create User for login.![login](https://user-images.githubusercontent.com/49251756/201357526-644dd199-98cf-46a6-9fce-47053556092a.PNG)

