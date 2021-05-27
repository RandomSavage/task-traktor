import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



function App() {
  // const name = "RandomSavage"
  // const x = false
  const [showAddTask, setShowAddTask] = useState(false)
  const[tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Bike Tour',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Fishing',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Golf',
      day: 'Feb 5th at 2:30pm',
      reminder: false
    },
  ])
  //Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

  //Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show'}
      {/* <h1>Task_Traktor</h1> */}
      {/* <h2>Hello {name}!</h2> */}
      {/* <p>Hell {x ? 'YEs' : 'No'}</p> */}
    </div>
  );
}

export default App;
