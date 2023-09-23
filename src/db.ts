import { Sequelize } from "sequelize";
import config from "./config";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: config.mysqlHost,
  port: parseInt(config.mysqlPort),
  username: config.mysqlUser,
  password: config.mysqlPassword,
  database: config.mysqlDatabase,
  logging: false,
});

export default sequelize;
