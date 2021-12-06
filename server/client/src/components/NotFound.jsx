import { makeStyles } from "@material-ui/core";
import React from "react";
import notfound from "../Images/NotFound.png";

const useStyles = makeStyles({
    image: {
        width: "100%",
    }
})

const NotFound = () => {
    const classes = useStyles();
    return (

        <img className={classes.image} src = {notfound} alt="notfound"/>
    )
}

export default NotFound;