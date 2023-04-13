import { useState } from "react"
const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [description, setDescription] = useState('')
    const [reminder, setReminder] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert('Enter some valid data Bro!')
        
        }
        onAdd({title,  day, description, reminder})

        setDay('')
        setTitle('')
        setDescription('')
        setReminder(false)
        
    }
  return (
        <form  className="Tasks newtask" onSubmit = {onSubmit}>
          <h2>Add Task</h2><hr></hr>
          
          <div className= "form-control"> 
            <label>Title</label><br></br>
            <input type='text' placeholder="Add Title" value={title} 
            onChange = {(e) => setTitle(e.target.value)} />
        </div>
          <div className= "form-control"> 
            <label>Due Date</label><br></br>
            <input type='text' placeholder="eg. 10th Feb 2023" 
            value={day} 
            onChange = {(e) => setDay(e.target.value)}/>
        </div>
        <div className= "form-control"> 
            <label>Description</label><br></br>
            <textarea type='text' placeholder="Add task desc" value={description} 
            onChange = {(e) => setDescription(e.target.value)} rows = '4'/>
        </div>
          <div className= "form-control"> 
            <label>Set Reminder</label>
            <input type='checkbox' 
            checked = {reminder}
            value={reminder} 
            onChange = {(e) => setReminder(e.currentTarget.checked)} />
        </div>
        
        <input type= 'submit' value ='Save' className="btn"/>
         </form>
  )
}

export default AddTask