import Comment from "../models/Comments.js";
import Tasks from "../models/Tasks.js";
import Users from "../models/Users.js";

// ดึงข้อมูล task พร้อม comment
export async function getTaskWithComments(req, res) {
    const { task_id } = req.params;
    
    try {
        const taskWithComments = await Tasks.findByPk(task_id, {
            include: [{ model: Comment, include: [{ model: Users, attributes: ["username"] }] }]
        });

        if (!taskWithComments) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(taskWithComments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// สร้าง comment
export async function createComment(req, res) {
    const { task_id } = req.params;
    const { user_id, comment_text } = req.body;

    try {
        const task = await Tasks.findByPk(task_id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        const newComment = await Comment.create({ task_id, user_id, comment_text });
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// อัปเดต comment
export async function updateComment(req, res) {
    const { comment_id } = req.params;
    const { comment_text } = req.body;

    try {
        const comment = await Comment.findOne(comment_id);
        if (!comment) {
            console.log(comment)
            return res.status(404).json({ message: "Comment not found" });
        }

        comment.comment_text = comment_text;
        await comment.save();

        res.json({ message: "Comment updated successfully", comment });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// ลบ comment
export async function deleteComment(req, res) {
    const { comment_id } = req.params;

    try {
        const comment = await Comment.findOne(comment_id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        await comment.destroy();
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
