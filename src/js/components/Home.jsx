import React, { useState } from "react";
import InputList from "./InputList";
import AllList from "./AllList";

const Home = () => {
	const [task, setTask] = useState([]);

	const addTask = (task) => {
		setTask([...task, task]);
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