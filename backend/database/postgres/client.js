import pg from "pg";
const { Pool } = pg;

let pool = undefined;

export const getPool = () => pool;

export const initalizeDatabase = async () => {
  if (pool) return;
  try {
    console.log(process.env.HOST ," hostname");
    pool = new Pool({
      host: process.env.HOST, // Ensure the correct env variable
      user: process.env.DATABASE_USER, // Correct the 'username' to 'user'
      database: process.env.DATABASE, // Correct the 'database' reference
      password: process.env.PASSWORD, // Don't forget password
      port: 5432, // Default to 5432 if no port is set
    });
  } catch (err) {
    console.log("Data base connection failed");
    process.exit(1);
  }
};

