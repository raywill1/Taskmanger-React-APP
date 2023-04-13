
import {FaTimes} from 'react-icons/fa';
function Todo({task, onDelete, onToggle}) {

  // convert the timestamp to local date
  const datestring = new Date(task.timestamp).toLocaleString();
 
    return (
     
         <div className={`card ${task.reminder ? 'reminder' :''}`} onDoubleClick={() => onToggle(task._id)}>
            <h4>{task.title} <FaTimes style={{color:'red', 
            cursor:'pointer', justifyContent: 'flex-end'}} 
            onClick = { () => onDelete (task._id)} /></h4>
            <p>Due Date: {task.day}</p>
            <p>Date Created: {datestring}</p>
            <p>Description:  {task.description}</p>
            <p>{task.reminder}</p>
          <hr />
          </div>
        );
}

export default Todo;