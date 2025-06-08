import AllItem from "../components/AllItem";



const AllList = ({task = [], removeTask}) => {

    if (!Array.isArray(task)) {
        console.error("Error: 'task' no es un array válido", task);
        return <p>Error al cargar la lista de tareas.</p>;
    }
    
    return (
        <ul>
            {task.length === 0 ? (
                <li className="empty">No hay tareas, añadir tareas</li>
            ) : (
                task.map((taskItem) => (
                    <AllItem 
                    key={taskItem.id} 
                    task={taskItem.label || "Tarea sin nombre"} 
                    taskId ={taskItem.id} 
                    removeTask= {removeTask} />
                )
            ))
            }
        </ul>
    )
}

export default AllList;