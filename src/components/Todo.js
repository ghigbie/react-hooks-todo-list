import React from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const Todo = ({ task, completed}) => {
    return (
        <>
            <ListItem>
                <Checkbox tabIndex={-1} checked={completed} />
                <ListItemText>{task}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton>
                        <DeleteIcon />
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
        </>
    );
}

export default Todo;