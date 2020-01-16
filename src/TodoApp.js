import React from 'react'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/code/Grid";

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
    return (
        <Paper style={paperStyles}>
           <AppBar color='primary' position='static' style={appBarStyles}>
                <Toolbar>
                    <Typography color="inherit">
                        Todos with hooks
                    </Typography>
                </Toolbar>
           </AppBar>
        </Paper>
    );
}

export default TodoApp;