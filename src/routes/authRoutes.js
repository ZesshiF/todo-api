import { Router } from "express";
import { register, login } from "../controllers/userController.js";

const router = Router();

// Route เพื่อสร้างผู้ใช้
router.post("/register", register);

// Route เพื่อเข้าสู่ระบบ
router.post("/login", login);

export default router;
