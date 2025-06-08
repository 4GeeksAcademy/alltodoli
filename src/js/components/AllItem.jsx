const AllItem = ({task, taskId, removeTask}) => {
    return(
        <li className="task-item">
            {task}
            <button className="deletebtn" onClick={() => removeTask(taskId)}>X</button>
        </li>
    )
}

export default AllItem