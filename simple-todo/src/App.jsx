import './scss/App.scss';
import Form from './components/form.jsx';
import Tasks from './components/Tasks.jsx';
import { useEffect, useState } from 'react';

const tasksData = [
  {
    "id": 0,
    "title": "Get sh*t done",
    "complete": false
  },

]

function App() {
  const savedData = JSON.parse(localStorage.getItem('tasks'))
  const [tasksArray, setTaskArray] = useState(savedData ? savedData : tasksData)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
  }, [tasksArray]);

  const addTodo = (event) => {
    event.preventDefault();
    const ipt = event.target.querySelector('input');
    const txt = ipt.value;
    ipt.value = '';
    
    if (!txt) {return};
    ipt.focus();

    const newTask = {
      // "id": tasksArray[tasksArray.length-1]?  tasksArray[tasksArray.length-1].id + 1 : 0,
      "id": Date.now(),
      "title": txt,
      "complete": false
    };
  
    const newTaskData = tasksArray.concat([newTask]);
    setTaskArray(newTaskData.reverse());
  };

  const markTodo = (taskID) => {
    const taskData = tasksArray.map((task)=>{
      if (task.id === taskID) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTaskArray(taskData);
  };

  const deleteTodo = (taskID) => {
    let delTask = null;
    const taskData = tasksArray.map((task)=>{
      if (task.id === taskID) {
        delTask = task;
      }
      return task;
    });
    taskData.splice(taskData.indexOf(delTask), 1);

    setTaskArray(taskData);

  };

  const actions = [markTodo, deleteTodo];
  
  return (
    <div className="App">
      <div className='container'>
        <Form onSubmit={addTodo}/>
        <Tasks tasks={tasksArray} actions={actions}/>
      </div>
    </div>
  );
}

export default App;
