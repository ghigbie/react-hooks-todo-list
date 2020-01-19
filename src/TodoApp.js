import React, { useState } from 'react'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import uuid from 'uuid/v4';

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

    const fakeTodos = [
        {id: 1, task: 'walk dog', completed: false },
        {id: 2, task: 'walk cat', completed: false },
        {id: 3, task: 'walk fish', completed: false }
    ]
    const [todos, setTodos] = useState(fakeTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false}])
    }

    const removeTodo = todoId => {
        console.log("removeTodos  called");
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodos);
    }

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
             todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
        setTodos(updatedTodos);
    }

    const editTodo = (todoId, newTask) => {
        console.log("Edit called");
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, task: newTask} :  todo)
        setTodos(updatedTodos);
    }

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