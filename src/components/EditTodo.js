import React from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./../hooks/useInputState";

const paperStyles = {
    padding: "0 1rem",
    width: "90%",
    marginBottom: "2rem",
}

const EditTodoForm = ({ id, task, editTodo, toggleEditForm}) => {
    const [value, handleChange, reset] = useInputState(task);

    return(
        <Paper style={paperStyles}>
            <form onSubmit={ e => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggleEditForm();
            }}>
                <TextField   
                    margin='normal'
                    label={value === task ? value : null}
                    fullWidth
                    onChange={handleChange}
                    autoFocus
                />
            </form>
        </Paper>
    );
}

export default EditTodoForm;