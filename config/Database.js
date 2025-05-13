import { Sequelize } from "sequelize"

const dbContent = new Sequelize("t2_notes_123220139", "root", "KorupsiTimah$300T", {
  host: "34.70.179.84",
  dialect: "mysql"
});

export default dbContent;