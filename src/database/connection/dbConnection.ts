import mysql, { PoolOptions } from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const access: PoolOptions = {
  host: String(process.env.DB_HOST),
  database: String(process.env.DB_NAME),
  user: String(process.env.DB_USER),
  password: String(process.env.DB_PASSWORD),
  port: Number(process.env.DB_PORT),
};

const dbConnection = mysql.createPool(access);

export default dbConnection;
