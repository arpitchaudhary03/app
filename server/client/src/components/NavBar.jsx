import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";


const useStyles = makeStyles({
    header: {
        background: "#111111",
        position: "static",
    },
    tabs: {
        color: "#ffffff",
        textDecoration: "none",
        padding: "5px",
        fontSize: "20px",
    }
});

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="/">CRUD Application</NavLink>
                <NavLink className={classes.tabs} to="/all">All Users</NavLink>
                <NavLink className={classes.tabs} to="/add">Add User</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;