import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import Task from "./Tasks.js";

const Comments = sequelize.define("Comments", {
  comment_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  task_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    references: { model: Task, key: "task_id" }
  },
  comment_text: { type: DataTypes.TEXT, allowNull: false },
  created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
}, { timestamps: false });

export default Comments;
