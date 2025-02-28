import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken"; 
import Users from "../models/Users.js";

const { sign } = jwt;

// สร้างผู้ใช้
export async function register(req, res) {
    const { username, password, email} = req.body;
    const hashedPassword = await hash(password, 10);

    try {
        const user = await Users.create({ username, password: hashedPassword, email });
        console.log("Created user: ", username);
        res.status(201).json("User created successfully");
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}

// เข้าสู่ระบบ
export async function login(req, res) {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username } });

    if (!user || !(await compare(password, user.password))) {
        console.log("Invalid credentials");
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    console.log("Token: ", token);
    res.json({ token });
}

// ดึงข้อมูลผู้ใช้ทั้งหมด
export async function getAllUsers(req, res) {
    try {
        const users = await Users.findAll({
            attributes: { exclude: ["password"] }
        });
        console.log("All users: ", users);
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

// ดึงข้อมูลผู้ใช้ตาม id
export async function getUserById(req, res) {
    const { id } = req.params;

    try {
        const user = await Users.findByPk(id);
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }
        const { password, ...userWithoutPassword } = user.toJSON();
        console.log("User found: ", userWithoutPassword);
        res.json(userWithoutPassword);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

// อัปเดตข้อมูลผู้ใช้
export async function updateUser(req, res) {
    const { id } = req.params;
    const { username, password } = req.body;

    try {
        const user = await Users.findByPk(id);
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        const hashedPassword = password ? await hash(password, 10) : user.password;
        await Users.update(
            { username, password: hashedPassword, updated_at: new Date() },
            { where: { user_id: id }, fields: ['username', 'password', 'updated_at'], individualHooks: true }
        );
        console.log("User updated: ", username);
        res.json({ message: "User updated successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

// ลบผู้ใช้
export async function deleteUser(req, res) {
    const { id } = req.params;

    try {
        const user = await Users.findByPk(id);
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        await Users.destroy({ where: { user_id: id } });
        console.log("User deleted");
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}
