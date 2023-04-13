import React, {useEffect, useState} from 'react'
//import {Route, Routes} from 'react-router-dom';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from './components/Task';
// import AllTasks from './pages/AllTasks';
// import AddTask from './pages/AddTask';
// import TodaysTasks from './pages/TodaysTasks';
// import UnfinishedTasks from './pages/UnfinishedTasks';


function App() {
  
  const [backendData, setBackendData] = useState([])
  

  useEffect(() => {
    const fetchTasks = async () =>{
      const res = await  fetch("http://localhost:5000/api")

      const data = await res.json()
        console.log(data)
      setBackendData(data)
    }

      

     fetchTasks()
  },[])

    // add task
    const  addTask =(task) => {

     fetch("http://localhost:5000/api/posts",{
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          'Content-Type':'application/json'
        }

      });
        console.log(task);
    }



        // delete Task
    const deleteTask =(id) => {
      setBackendData(backendData.filter((task) =>
       task._id !== id))
    // return backendData;
  }
         // toggle reminder
     const toggleReminder = (id) => {
      setBackendData(backendData.map((task) => task._id === id
      ? { ...task, reminder: !task.reminder}: task))
     }

  return (
    <div className="container">
      
      <Header />
      <Nav />
      <Task tasks = {backendData} onDelete = {deleteTask}
      onToggle = {toggleReminder} onAdd = {addTask}/>
    
        {/* <Routes>
      <Route path='/'>
        <AllTasks  tasks = {backendData}  onDelete = {deleteTask}
      onToggle = {toggleReminder} />
      </Route>
        <Route path='/todaysTasks'>
          <TodaysTasks />
        </Route>
        <Route path='/addTask'>
          <AddTask onAdd = {addTask} />
        </Route>
        <Route path='/unfinished-tasks'>
          <UnfinishedTasks />
        </Route>
        </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
