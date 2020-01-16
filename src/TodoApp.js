import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

const paperStyles = {
    padding: 0,
    margin: 0,
    height: "100vh",
    backgroundColor: "#fafafa"
}

const appBarStyles = {
    height: "64px",
}

const TodoApp = () => {
    const fakeTodos = [
        {id: 1, task: 'walk dog', completed: false },
        {id: 2, task: 'walk cat', completed: false },
        {id: 3, task: 'walk fish', completed: false }
    ]

    const [todos, setTodos] = useState(fakeTodos);

    return (
        <Paper style={paperStyles}>
           <AppBar color='primary' position='static' style={appBarStyles}>
                <ToolBar>
                    <Typography color="inherit">
                        Todos with hooks
                    </Typography>
                </ToolBar>
           </AppBar>
           <TodoList todos={todos}/>
        </Paper>
    );
}

export default TodoApp;