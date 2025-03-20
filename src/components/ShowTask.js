import React from 'react'


export const ShowTask = ({tasklist, setTasklist, task, setTask}) => { //accessing states created in App.js

    const handleEdit = (id) => {
      const selectedTask = tasklist.find(todo => todo.id === id);
      setTask(selectedTask);
    }

    const handleDelete = (id) => {
      const updatedTaskList = tasklist.filter(todo => todo.id !== id);
      setTasklist(updatedTaskList);
    }

  return (
  <section className='showTask'>
      <div className="head">
          <div>
            <span className='title'>To Do</span>
            <span className="count">{tasklist.length}</span>
          </div>
          <button onClick={() => setTasklist([])} className="clearAll">Clear All</button>
      </div>
      <ul>
        { tasklist.map((todo) => (    //state banaya aur tasks ko map kiya
            <li key={todo.id}>
              <p>
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
              </p>
            <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
            <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
          </li>
        )) }
        
      </ul>
  </section>    
  )
}
