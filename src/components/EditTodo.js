import React from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./../hooks/useInputState";

const paperStyles = {
    margin: "1rem 0",
    padding: "0 1rem",
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
                />
            </form>
        </Paper>
    );
}

export default EditTodoForm;