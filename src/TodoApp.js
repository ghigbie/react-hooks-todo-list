import React from 'react'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import useTodoState from './hooks/useTodoState';

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

const gridStyles = {
    marginTop: "1rem",
}


const TodoApp = () => {
    const initialTodos = [];
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos); 

    return (
        <Paper style={paperStyles}>
           <AppBar color='primary' position='static' style={appBarStyles}>
                <ToolBar>
                    <Typography color="inherit">
                        Todos with Hooks
                    </Typography>
                </ToolBar>
           </AppBar>
           <Grid container justify='center' style={gridStyles}>
            <Grid item xs={11} md={8} lg={4}>
                <TodoForm addTodo={addTodo}/>
                <TodoList 
                    todos={todos} 
                    removeTodo={removeTodo} 
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                />
            </Grid>
           </Grid>
        </Paper>
    );
}

export default TodoApp;