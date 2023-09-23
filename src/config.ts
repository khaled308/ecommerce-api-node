import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT!,
  dbURI: process.env.DB_URI!,
  mysqlHost: process.env.MYSQL_HOST!,
  mysqlUser: process.env.MYSQL_USER!,
  mysqlPassword: process.env.MYSQL_PASSWORD!,
  mysqlDatabase: process.env.MYSQL_DATABASE!,
  mysqlPort: process.env.MYSQL_PORT!,
};
