import React from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./../hooks/useInputState"

const paperStyles = {
    margin: "1rem 0",
    padding: "0 1rem",
}

const TodoForm  = ({ id, task, editTodo, toggleEditForm})=> {
    const [value, handleChange, reset] = useInputState("");

    return(
        <Paper style={paperStyles}>
            <form onSubmit={ e => {
                e.preventDefault();
                editTodo(id, task);
                reset();
                toggleEditForm();
            }}>
                <TextField 
                    value={value}  
                    onChange={handleChange}
                    margin='normal'
                    label='Add New Todo'
                    fullWidth
                />
            </form>
        </Paper>
    );
}

export default TodoForm;