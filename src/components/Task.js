
import AddTask from "../pages/AddTask"
import Todo from "./Todo"
  const Task = ({tasks, onDelete, onToggle, onAdd}) => {
  
    
    return (
    <div>
        <h2>Added Tasks</h2> <hr/>
        <div className="task-container">
         <div className="Tasks tasklist">
         {(typeof tasks === 'undefined') ?(
            <p>Loading.....</p>
          ) :(
             tasks.map((task) =>(
             
          <Todo key={task._id} task = {task} onDelete = {onDelete}
          onToggle = {onToggle}/>
          ))
          )}
          </div>
         <AddTask  onAdd = {onAdd}/>
        </div>
        <hr />
    </div>
  )
}

export default Task