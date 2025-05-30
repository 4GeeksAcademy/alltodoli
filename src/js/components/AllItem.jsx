const AllItem = ({task, index, removeTask}) => {
    return(
        <li className="task-item">
            {task}
            <button className="deletebtn" onClick={() => removeTask(index)}>X</button>
        </li>
    )
}

export default AllItem