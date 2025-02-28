import { Router } from "express";
import authMiddleware from "../middleware/auth.js";
import { getTasks, addTask, updateTask, deleteTask, getTaskById} from "../controllers/taskController.js";

const router = Router();

// Route เพื่อดึงข้อมูล task ทั้งหมด
router.get("/", authMiddleware, getTasks);
// Route เพื่อสร้าง task
router.post("/", authMiddleware, addTask);
// Route เพื่อดึงข้อมูล task ตาม id
router.get("/:id", authMiddleware, getTaskById);
// Route เพื่ออัปเดต task
router.put("/:id", authMiddleware, updateTask);
// Route เพื่อลบ task
router.delete("/:id", authMiddleware, deleteTask);

export default router;
