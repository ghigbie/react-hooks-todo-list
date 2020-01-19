import React from 'react';
import Todo from './Todo';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

const TodoList = ({todos, removeTodo, toggleTodo, editTodo })  => {
    return (
        <Paper>
            <List>
`            {todos.length > 0 && todos.map(todo =>(
                <Todo 
                    id={todo.id}
                    key={todo.id} 
                    task={todo.task}
                    completed={todo.completed}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                />   
             ))}
            </List>
        </Paper>
    );
}



export default TodoList;
