import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import client from "../models/database.js";


export const login = async (req, res, next) => {
  try {
    const text = `SELECT * FROM users where username = '${req.body.username}'`;
    const result = await client.query(text)
    const user = result.rows

    if(!user) return next(createError(404, "User not Found"));
    
    const isPasswordCorrect = await bcrypt.compare(req.body.password, user[0].password);
    if(!isPasswordCorrect) return next(createError(400, "Wrong Password or Username"));

    const token = jwt.sign({id:user[0].id, username:user[0].username}, process.env.JWT, { expiresIn: '1h' });

    res.cookie("access_token", token, {
      httpOnly: true,
    }).status(200).json({status: "Success", message: "Success", details:user[0].username})
  } catch (err) {
    next(err)
  }
}

export const register = async (req, res, next) => {
  try {
    
    const {username, password} = req.body

    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);

    const text = 'INSERT INTO users(username, password) VALUES($1, $2);'
    const values = [username, hash];
    const result = await client.query(text, values);
    res.status(200).json({status: "Success", message: "Success"});

  } catch (err) {
    next(err)
  }
}
