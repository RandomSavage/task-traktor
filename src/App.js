import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'



function App() {
  // const name = "RandomSavage"
  // const x = false
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

  //Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks to show'}
      {/* <h1>Task_Traktor</h1> */}
      {/* <h2>Hello {name}!</h2> */}
      {/* <p>Hell {x ? 'YEs' : 'No'}</p> */}
    </div>
  );
}

export default App;
