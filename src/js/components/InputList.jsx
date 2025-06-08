import { useState } from "react";

const InputList = ({ addTask }) => {
    const [newTask, setNewTask] = useState("");

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && newTask.trim()) {
            addTask(newTask);
            setNewTask("");
        }
    };

    return (
        <input 
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Añadir nueva tarea..."
        />
    );
};

export default InputList;
