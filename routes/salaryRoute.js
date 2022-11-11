import express from "express";
import { getSalaries, createSalary, deleteSalary, getSalary, getSalaryContract, getSalaryDepartment, getSalaryDepartmentSub } from "../controllers/salaryController.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//get all
router.get("/", verifyToken, getSalaries);

//create
router.post("/", verifyToken, createSalary);

// //update
// router.put("/:id", updateSalary);

// //delete
router.delete("/:id", verifyToken, deleteSalary);

// //get mean, min, max for salary over the entire database for provided financial year. 
router.get("/salaryMeanMinMax", verifyToken, getSalary);

// //get mean, min, max for salary on_contract true
router.get("/salaryContract", verifyToken, getSalaryContract);

// //get mean, min, max for salary department
router.get("/salaryDepartment", verifyToken, getSalaryDepartment);

// //get mean, min, max for salary department
router.get("/salaryDepartmentSub", verifyToken, getSalaryDepartmentSub);

export default router