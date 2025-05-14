import { Sequelize } from "sequelize";
import dbContent from "../config/Database.js";

const User = dbContent.define("users", {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  refreshToken: Sequelize.TEXT,
}, {
  freezeTableName: true,
  timestamps: false,
});

dbContent.sync().then(() => { console.log("Database synced!") });

export default User;