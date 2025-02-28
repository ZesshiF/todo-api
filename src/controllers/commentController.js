import Comments from '../models/Comments.js';

// ดึงข้อมูล comment ทั้งหมด
export const addComment = async (req, res) => {
    try {
        const { text, postId } = req.body;
        const userId = req.user.id;

        const newComment = new Comments({
            text,
            postId,
            userId
        });

        const savedComment = await newComment.save();
        console.log("comment saved", savedComment);
        res.status(201).json(savedComment);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: 'Error adding comment', error });
    }
};

// ดึงข้อมูล comment ตาม id
export const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        const userId = req.user.id;

        const comment = await Comments.findById(id);

        if (!comment) {
            console.log("comment not found");
            return res.status(404).json({ message: 'Comment not found' });
        }

        if (comment.userId.toString() !== userId) {
            console.log("unauthorized");
            return res.status(403).json({ message: 'Unauthorized' });
        }

        comment.text = text;
        const updatedComment = await comment.save();
        console.log("comment updated", updatedComment);
        res.status(200).json(updatedComment);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: 'Error updating comment', error });
    }
};

// ลบ comment
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const comment = await Comments.findById(id);

        if (!comment) {
            console.log("comment not found");
            return res.status(404).json({ message: 'Comment not found' });
        }

        if (comment.userId.toString() !== userId) {
            console.log("unauthorized");
            return res.status(403).json({ message: 'Unauthorized' });
        }

        await comment.remove();
        console.log("comment deleted", comment);
        res.status(200).json({ message: 'Comment deleted' });
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: 'Error deleting comment', error });
    }
};