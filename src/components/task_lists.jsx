import React, { useEffect } from "react";
import TaskList from './task_list.jsx'

function TaskLists() {
  useEffect(() => {
    fetch("http://localhost:5000/tasks", {
      method: "GET",
    })
  }, []);

  return(
    <div>
      <h2>Todo List</h2>
      <div>
        <ul>
          <TaskList />
          <TaskList />
          <TaskList />
          <TaskList />
        </ul>
      </div>
    </div>
  )
}

export default TaskLists;
