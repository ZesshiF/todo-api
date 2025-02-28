import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import User from "./Users.js";

const Tasks = sequelize.define("Tasks", {
  task_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    references: { model: User, key: "user_id" }
  },
  title: { type: DataTypes.STRING(255), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  status: { type: DataTypes.ENUM("pending", "in_progress", "completed"), allowNull: false, defaultValue: "pending" },
  priority: { type: DataTypes.ENUM("low", "medium", "high"), allowNull: false, defaultValue: "low" },
  due_date: { type: DataTypes.DATE, allowNull: false },
  created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
}, { timestamps: false });

export default Tasks;
