import pkg from 'jsonwebtoken';
const { verify } = pkg;
import dotenv from "dotenv";

dotenv.config();

// Middleware เช็ค token ว่ามีหรือไม่
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    console.log("No token");
    return res.status(401).json({ message: "Access denied" });}

  try {
    // เช็ค token ว่าถูกต้องหรือไม่
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
