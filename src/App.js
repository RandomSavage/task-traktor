import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



function App() {
  // const name = "RandomSavage"
  // const x = false
  const [showAddTask, setShowAddTask] = useState(false)
  const[tasks, setTasks] = useState([])

useEffect(() =>{
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }
  getTasks()
}, [])

//Fetch Tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  // console.log(data)
  return data
}

//Fetch Task
const fetchTask = async (id) => {
  const res = await fetch('http://localhost:5000/tasks/' + id)
  const data = await res.json()

  // console.log(data)
  return data
}

  //Add Task
const addTask = async (task) => {
  const res =  await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json()
  setTasks([...tasks, data])
}

  //Delete Task
  const deleteTask = async (id) => {
    // console.log('delete', id)
    const res = await fetch('http://localhost:5000/tasks/' + id, {
      method: 'DELETE'
    })
    // const res = await fetch('http://localhost:5000/tasks/' + id)
    // `http://localhost/5000/tasks/${id}`
    // const data = await res.json()
    // console.log(data)
    res.status === 200 ? setTasks(tasks.filter((task) => task.id !== id)) : alert('Error Deleting This Task')
  }

  const toggleReminder = async (id) => {
    // console.log(id)
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch('http://localhost:5000/tasks/' + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        <Route path='/' exact render={ (props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show'}
          </>
        )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;


      {/* <h1>Task_Traktor</h1> */}
      {/* <h2>Hello {name}!</h2> */}
      {/* <p>Hell {x ? 'YEs' : 'No'}</p> */}
