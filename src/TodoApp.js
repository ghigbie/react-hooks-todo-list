import React, { useState , useEffect } from 'react'
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

    const localTodos = JSON.parse(window.localStorage.getItem("todos")) || []

    const [todos, setTodos] = useState(localTodos); 

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false}])
    }

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodos);
    }

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
             todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
        setTodos(updatedTodos);
    }

    const editTodo = (todoId, newTask) => {
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