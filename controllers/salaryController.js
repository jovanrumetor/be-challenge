import client from "../models/database.js";
import dotenv, { config } from "dotenv";

dotenv.config();



export const getSalaries = async (req, res, next) => {
  try {
    const text = 'SELECT * FROM salaries';
    const result = await client.query(text)
    const data = result.rows
    res.status(200).json({status: "Success", message: "Success", data});
  } catch (error) {
      next(error);
  }
}

export const getSalary = async (req, res, next) => {
  try {
    const text = 'SELECT min(salary) AS Min_Salary, max(salary) AS Max_Salary, AVG(salary) AS Mean_Salary FROM salaries;';
    const result = await client.query(text)
    const data = result.rows
    res.status(200).json({status: "Success", message: "Success", data});
  } catch (error) {
    next(error);
  }
}

export const getSalaryContract = async (req, res, next) => {
  try {
    const text = 'SELECT min(salary) AS Min_Salary, max(salary) AS Max_Salary, AVG(salary) AS Mean_Salary FROM salaries  where on_contract = true;';
    const result = await client.query(text)
    const data = result.rows
    res.status(200).json({status: "Success", message: "Success", data});
  } catch (error) {
    next(error);
  }
}

export const getSalaryDepartment = async (req, res, next) => {
  try {
    const text = 'SELECT department, min(salary) AS Min_Salary, max(salary) AS Max_Salary, AVG(salary) AS Mean_Salary FROM salaries GROUP BY department;';
    const result = await client.query(text)
    const data = result.rows
    res.status(200).json({status: "Success", message: "Success", data});
  } catch (error) {
    next(error);
  }
}

export const getSalaryDepartmentSub = async (req, res, next) => {
  try {
    const text = 'SELECT department, sub_department, min(salary) AS Min_Salary, max(salary) AS Max_Salary, AVG(salary) AS Mean_Salary FROM salaries GROUP BY department, sub_department;';
    const result = await client.query(text)
    const data = result.rows
    res.status(200).json({status: "Success", message: "Success", data});
  } catch (error) {
    next(error);
  }
}

export const createSalary = async (req, res, next) => {
  try {
    const {name, salary, currency, on_contract, department, sub_department} = req.body
    const text = 'INSERT INTO salaries(name, salary, currency, on_contract, department, sub_department) VALUES($1, $2, $3, $4, $5, $6) RETURNING *'
    const values = [name, salary, currency, on_contract, department, sub_department];
    const result = await client.query(text, values);
    const data = result.rows[0];
    res.status(200).json({status: "Success", message: "Success", data});
  } catch (error) {
      next(error);
  }
}

export const deleteSalary = async (req, res, next) => {
  try {
    const text = `DELETE FROM salaries where id = '${req.params.id}' RETURNING *`
    const result = await client.query(text);
    const data = result.rows[0];
    res.status(200).json({status: "Success", message: "Success", data});
  } catch (err) {
    next(err);
  }
}