import { makeStyles } from "@material-ui/core";
import React from "react";
import crud from "../Images/crud.jpg";


const useStyles = makeStyles({
    image: {
        width: "100%",
    }
})
const CrudApp = () => {
    const classes = useStyles();
    return (
        <img className={classes.image} src={crud} alt="crud" />
    )
}

export default CrudApp;