
import { CheckBox, Delete, Edit } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";

const TodoItem = ({ task ,index,editTask }) => {
	return (
		<ListItem
			secondaryAction={
				<>
					<IconButton onClick={()=>editTask(index)}>
						<Edit color='primary' />
					</IconButton>
					<IconButton >
						<Delete color='error' />
					</IconButton>
				</>
			}>
			<CheckBox checked={task.completed} />
			<ListItemText
				primary={task.text}
				style={{ textDecoration: task.completed ? "line-through" : "none" }}
			/>
		</ListItem>
	);
};

export default TodoItem;
