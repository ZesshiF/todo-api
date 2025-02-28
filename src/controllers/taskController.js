import Tasks from '../models/Tasks.js';

// ดึงข้อมูล task ทั้งหมด
export const getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ดึงข้อมูล task ตาม id
export const addTask = async (req, res) => {
    const task = new Tasks({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// อัปเดตข้อมูล task
export const updateTask = async (req, res) => {
    try {
        const task = await Tasks.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Cannot find task' });
        }

        if (req.body.title != null) {
            task.title = req.body.title;
        }
        if (req.body.description != null) {
            task.description = req.body.description;
        }
        if (req.body.completed != null) {
            task.completed = req.body.completed;
        }

        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// ลบ task
export const deleteTask = async (req, res) => {
    try {
        const task = await Tasks.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Cannot find task' });
        }

        await task.remove();
        res.json({ message: 'Deleted Task' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
