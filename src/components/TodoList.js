import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const TodoList = ({todos})  => {
    return (
        <Paper>
            <List>
        {todos.length > 0 && todos.map(todo =>
            (<span key={todo.id}>
                <ListItem key={todo.id}>
                    <ListItemText>{todo.task}</ListItemText>
                </ListItem>
                <Divider/>
            </span>)
        )}
            </List>
        </Paper>
    );
}

export default TodoList;
