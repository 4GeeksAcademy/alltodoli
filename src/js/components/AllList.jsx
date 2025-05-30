import AllItem from "../components/AllItem";

const AllList = ({task = [], removeTask}) => {
    return (
        <ul>
            {task.length === 0 ? (
                <li className="empty">No hay tareas, añadir tareas</li>
            ) : (
                task.map((task, index) => (
                    <AllItem key={`${task}-${index}`} task={task} index ={index} removeTask={removeTask} />
                )
            ))
            }
        </ul>
    )
}

export default AllList;