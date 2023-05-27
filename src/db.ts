import { createPool, Pool } from "mysql2/promise";

const pool: Pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "hexagonal",
});

export default pool;
