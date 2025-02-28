import { Router } from "express";
import authMiddleware from "../middleware/auth.js";
import { addComment, updateComment, deleteComment } from "../controllers/commentController.js";

const router = Router();

// Route เพื่อสร้าง comment
router.post("/", authMiddleware, addComment);
// Route เพื่ออัปเดต comment
router.put("/:id", authMiddleware, updateComment);
// Route เพื่อลบ comment
router.delete("/:id", authMiddleware, deleteComment);

export default router;
