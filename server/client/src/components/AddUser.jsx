import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { addUser } from "../Service/api";   
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles({
    container: {
        width: "50%",
        margin: "5% 0 0 25%",
        '& > *': {
            marginTop: "20px",
        }
    }
})


const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
}


const AddUser = () => {


    const [user, setUser]= useState(initialValue);

    const {name, username, email, phone} = user;
    
    
    
    const classes = useStyles();
    const navigate = useNavigate();

const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value })
}


const addUserDetails = async () => {
    await addUser(user);
    navigate('/all');
}


    return (
<FormGroup className={classes.container}>
<Typography variant="h4">Add User</Typography>
<FormControl>
  <InputLabel>Name</InputLabel>
  <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
</FormControl>

<FormControl>
  <InputLabel>Username</InputLabel>
  <Input  onChange={(e) => onValueChange(e)} name='username' value={username} />
</FormControl>

<FormControl>
  <InputLabel>Email</InputLabel>
  <Input  onChange={(e) => onValueChange(e)} name='email'value={email} />
</FormControl>


<FormControl>
  <InputLabel>Phone</InputLabel>
  <Input  onChange={(e) => onValueChange(e)} name='phone' value={phone} />
</FormControl>
<Button onClick={() => addUserDetails()} variant="contained" color="primary">Add User</Button>

</FormGroup>
    )
}

export default AddUser;