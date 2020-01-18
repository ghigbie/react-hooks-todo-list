import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Diver";

const TodoList = ({todos})  => {
    return (
        <Paper>
            <List>
        {todos.map(todo => (
            <ListItem key={todo.id}>
                <ListItemText>(todo.task}</ListItemText>
                <Divider/>
            </ListItem>
        ))}
            </List>
        </Paper>
    );
}

export default TodoList;
