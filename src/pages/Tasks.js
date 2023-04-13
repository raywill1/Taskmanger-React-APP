import React from 'react'

const Tasks = ({task}) => {
  return (
    <div>
        <h3>Task</h3>

    <h4>{task.text}</h4>
    <p>{task.day}</p>

    </div>
  )
}

export default Tasks