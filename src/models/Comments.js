import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import Task from "./Tasks.js";
import Users from "./Users.js";

const Comments = sequelize.define("Comments", {
  comment_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  task_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    references: { model: Task, key: "task_id" }
  },
  user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Users, key: "user_id" } },
  comment_text: { type: DataTypes.TEXT, allowNull: false },
  created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
}, { timestamps: false });

Task.hasMany(Comments, { foreignKey: "task_id", onDelete: "CASCADE" });
Comments.belongsTo(Task, { foreignKey: "task_id" });
Comments.belongsTo(Users, { foreignKey: "user_id" });

export default Comments;
