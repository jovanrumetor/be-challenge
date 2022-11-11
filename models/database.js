import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const client = new pg.Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME

});

export default client