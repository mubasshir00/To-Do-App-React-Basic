import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const TodoForm = ({addTask,editTask,editIndex}) => {
  const [task, setTask] = useState(editTask || "");
  const handleSubmit = () => {
    if(task.trim()){
      addTask(task, editIndex);
      setTask("");
    }
  }
  return (
    <div>
      <TextField
      fullWidth
      label="Add Todo"
      variant='outlined'
      value={task}
      onChange={(e) => setTask(e.target.value)}
      />
      <Button variant='contained' color='primary' style={{marginTop:"10px"}} onClick={handleSubmit}>{editIndex !== null ? "Edit Task" : "Add Task"}
      </Button>
    </div>
  )
}

export default TodoForm