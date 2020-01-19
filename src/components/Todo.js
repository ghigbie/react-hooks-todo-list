import React from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggleState from "./../hooks/useToggleState";
import EditTodoForm from './EditTodo';

const Todo = ({ id, task, completed, removeTodo, toggleTodo, editTodo}) => {
  const [isEditing, toggle] = useToggleState();
    return (
      <>
        <ListItem>
          {isEditing ?
            (<EditTodoForm task={task} editTodo={editTodo}/>)
            :
         (<>
          <Checkbox 
              tabIndex={-1} 
              checked={completed} 
              onClick={() => toggleTodo(id)}
            />
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label='Edit' onClick={toggle}> 
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
            </>)
          }
        </ListItem>
        <Divider />
      </>
    );
}

export default Todo;