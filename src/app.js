import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authMiddleware from "./middleware/auth.js";

const app = express();
app.use(cors());
app.use(express.json()); 


app.use("/api/auth", authRoutes);
app.use("/api/tasks", authMiddleware, taskRoutes);
app.use("/api/comments", authMiddleware, commentRoutes);
app.use("/api/users", authMiddleware, userRoutes);

export default app;
