import pkg from "pg";
import dns from "dns";
import dotenv from "dotenv";

dotenv.config();
dns.setDefaultResultOrder("ipv4first");

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DB_URL_POOLING,
  ssl: { rejectUnauthorized: false },
  max: 5, // wajib kecil untuk render free tier
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 10000,
});

export default pool;
