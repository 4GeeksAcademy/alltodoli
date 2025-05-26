import React from "react";
import AllItem from "../components/AllItem";

const AllList = ({task, removeTask}) => {
    return (
        <ul>
            {task.length === 0 ? (
                <li className="empty">No hay tareas, añadir tareas</li>
            ) : (
                task.map((task, index) => (
                    <AllItem key={index} task={task} removeTask={removeTask} />
                )
            ))
            }
        </ul>
    )
}

export default AllList;