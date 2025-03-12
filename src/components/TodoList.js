import React from 'react'
import TodoItem from './TodoItem'
import { List } from '@mui/material'

const TodoList = ({tasks,editTask}) => {
  return (
    <List>
     {
      tasks.map((task,index)=>(
       <TodoItem key={index} task={task} editTask={editTask}/>
      ))}
    </List>
  )
}

export default TodoList