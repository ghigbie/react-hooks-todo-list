import React from 'react';
import Todo from './Todo';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

const TodoList = ({todos})  => {
    return (
        <Paper>
            <List>
`            {todos.length > 0 && todos.map(todo =>(
                <Todo 
                    key={todo.id} 
                    task={todo.task}
                    completed={todo.completed}
                />   
             ))}
            </List>
        </Paper>
    );
}

export default TodoList;
