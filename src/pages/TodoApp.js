/** @format */

import { Container } from "@mui/material";
import React, { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const TodoApp = () => {
	const [tasks, setTasks] = useState([]);
	const [editIndex, setEditIndex] = useState(null);

	const addTask = (text, index) => {
        if (index !== null) {
            const newTasks = [...tasks];
            newTasks[index] = { text, isCompleted: false };
            setTasks(newTasks);
            setEditIndex(null);
            return;
        } else {
            setTasks([...tasks, { text, isCompleted: false }]);
        }
    };
	const editTask = (index) => setEditIndex(index);
    const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
	return (
		<Container>
			<h1>To DO List</h1>
			<TodoForm
				addTask={addTask}
				editTask={editIndex !== null ? tasks[editIndex].text : ""}
				editIndex={editIndex}
			/>
			<TodoList tasks={tasks} editTask={editTask}/>
		</Container>
	);
};

export default TodoApp;
