import { DataTypes, Sequelize } from "sequelize";
import dbContent from "../config/Database.js";

  const Notes = dbContent.define("notes", {
    owner: DataTypes.STRING,
    title: DataTypes.STRING,
    contain: DataTypes.TEXT,
  }, {
    freezeTableName: true
  });

export default Notes;

(async()=> {
  await dbContent.sync();
})();