import Tasks from '../models/Tasks.js';

// ดึงข้อมูล task ทั้งหมด
export const getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.findAll();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ดึงข้อมูล task ตาม id
export const getTaskById = async (req, res) => {
    try {
        const task = await Tasks.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Cannot find task' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// สร้าง task
export const addTask = async (req, res) => {
    const task = new Tasks({
        user_id: req.body.user_id,
        title: req.body.title,
        description: req.body.description,
        due_date: req.body.due_date
    }
);

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
        const task = await Tasks.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Cannot find task' });
        }

        if (req.body.title != null) {
            task.title = req.body.title;
        }
        if (req.body.description != null) {
            task.description = req.body.description;
        }
        if (req.body.status != null) {
            task.status = req.body.status;
        }
        
        const updatedTask = await task.update(
            { title: task.title, description: task.description, status: task.status, updated_at: new Date() },
            { where: { task_id: req.params.id }, fields: ['title', 'description', 'status', 'updated_at'], individualHooks: true }
        );
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// ลบ task
export const deleteTask = async (req, res) => {
    try {
        const task = await Tasks.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Cannot find task' });
        }

        await task.destroy();
        res.json({ message: 'Deleted Task' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
