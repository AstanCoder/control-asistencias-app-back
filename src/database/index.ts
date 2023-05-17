import { createPool } from "mysql2/promise";
import "dotenv/config";

export const pool = createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  port: Number(process.env.MYSQL_PORT) || 3306,
  database: process.env.MYSQL_DB || "assistencedb",
});

export const isConn = async () => {
  const [res] = await pool.query("SELECT NOW()");
  return res;
};


export const isFirstTime = async () => {
  const [count] = await pool.query(
    "SELECT count(*) AS TOTALNUMBEROFTABLES FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'assistencedb'"
  );
  const _count: any = count;

  if (_count[0].TOTALNUMBEROFTABLES === 0) {
    return true;
  }
  return false;
};
