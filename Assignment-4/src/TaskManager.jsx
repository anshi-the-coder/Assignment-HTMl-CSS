import { useState } from "react";
import TaskList from "./TaskList";

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const addTask = () => {
        if (task.trim() === "") return;
        if (editIndex !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = task;
            setTasks(updatedTasks);
            setEditIndex(null);
        } else {
            setTasks([...tasks, task]);
        }
        setTask("");
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const editTask = (index) => {
        setTask(tasks[index]);
        setEditIndex(index);
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h1 className="text-2xl font-bold">Task Manager</h1>
            <input className="border p-2 w-full" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task" />
            <button className="bg-blue-500 text-white p-2 rounded w-full" onClick={addTask}>{editIndex !== null ? "Update" : "Add"} Task</button>
            <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
        </div>
    );
};

export default TaskManager;