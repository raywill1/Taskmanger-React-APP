
import Todo from "../components/Todo"

const AllTasks = ({tasks, onToggle, onDelete}) => {

  return (
    <div>
        <h2>All Tasks</h2> <hr/>
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
          </div>
    </div>
  )
}

export default AllTasks