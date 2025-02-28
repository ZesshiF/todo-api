import { Router } from 'express';
import { getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';

const router = Router();

// Route เพื่อดึงข้อมูลผู้ใช้ทั้งหมด
router.get('/', getAllUsers);

// Route เพื่อดึงข้อมูลผู้ใช้ตาม ID
router.get('/:id', getUserById);

// Route เพื่ออัปเดตผู้ใช้ตาม ID
router.put('/:id', updateUser);

// Route เพื่อลบผู้ใช้ตาม ID
router.delete('/:id', deleteUser);

export default router;