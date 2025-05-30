import React, { useState, useEffect } from "react";
import InputList from "./InputList";
import AllList from "./AllList";
import "../../styles/index.css"

const Home = () => {
	const [task, setTask] = useState([]);

	const addTask = (newTask) => {
		setTask(prevTask => [...prevTask, newTask]);
	};


const removeTask = (index) => { 
	setTask(task.filter((_, i) => i !== index));
 }

 
	return (
		<div className="maincontainer">
			<h1>Lista de Tareas</h1>
			<InputList addTask={addTask} />
			<AllList task={task} removeTask={removeTask} />
		</div>
	)
}

export default Home;