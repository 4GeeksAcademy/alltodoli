import { useState, useEffect } from "react";
import InputList from "./InputList";
import AllList from "./AllList";
import "../../styles/index.css"


const Home = () => {
	const [task, setTask] = useState([]);

    const fetchTasks = async () => {
            try {
                const response = await fetch("https://playground.4geeks.com/todo/users/jusspian");
                if (!response.ok) throw new Error("Error al obtener tareas");
                
                const data = await response.json();
                console.log("Datos recibidos", data.todos);
                setTask(data.todos);

            } catch (error) {
                console.error("Error:", error);
            }
        };
        
	useEffect(() => {    
        fetchTasks();
    }, []);


	const addTask = async (newTask) => {
		const taskData = {label: newTask, done: false};

        console.log(taskData);

		try {
            const response = await fetch("https://playground.4geeks.com/todo/todos/jusspian", {
                method: "POST",
                body: JSON.stringify(taskData),
                headers: { "Content-Type": "application/json" }
            });

            if (!response.ok) throw new Error("Error al enviar tarea");
            await fetchTasks();
        } catch (error) {
            console.error("Error:", error);
        }
    };


    const removeTask = async (taskId) => {
    if (!taskId || typeof taskId !== "number") {
        console.error("Error: taskId no válido", taskId);
        return;
    }

    console.log("Eliminando tarea con ID:", taskId); 

    try {
        const response = await fetch(`https://playground.4geeks.com/todo/todos/${taskId}`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error("Error al eliminar tarea");

        await fetchTasks();
    } catch (error) {
        console.error("Error:", error);
    }
};


	return (
		<div className="maincontainer">
			<h1>Lista de Tareas</h1>
			<InputList addTask={addTask} />
			<AllList task={task} removeTask={removeTask} />
		</div>
	);

 };

	


export default Home;