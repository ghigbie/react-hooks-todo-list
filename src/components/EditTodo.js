import React from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./../hooks/useToggleState";

const paperStyles = {
    margin: "1rem 0",
    padding: "0 1rem",
}

const EditTodoForm = ({task, addTodo}) => {
    const [value, handleChange, reset] = useInputState(task);

    return(
        <Paper style={paperStyles}>
            <form onSubmit={ e => {
                e.preventDefault();
                addTodo(value);
                reset()
            }}>
                <TextField 
                    value={value}  
                    onChange={handleChange}
                    margin='normal'
                    label={value}
                    fullWidth
                />
            </form>
        </Paper>
    );
}

export default EditTodoForm;