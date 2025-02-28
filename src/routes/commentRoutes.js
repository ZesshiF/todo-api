import { Router } from "express";
import authMiddleware from "../middleware/auth.js";
import { getTaskWithComments, createComment, updateComment, deleteComment} from "../controllers/commentController.js";

const router = Router();

// Route เพื่อดึงข้อมูล task ทั้งหมดพร้อม comment
router.get("/:task_id",authMiddleware, getTaskWithComments);
// Route เพื่อสร้าง comment
router.post("/:task_id", authMiddleware, createComment);
// Route เพื่ออัปเดต comment
router.put("/:id", authMiddleware, updateComment);
// Route เพื่อลบ comment
router.delete("/:id", authMiddleware, deleteComment);

export default router;
