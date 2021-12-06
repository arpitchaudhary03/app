import React, { useEffect } from "react";
import { getUsers, deleteUser } from "../Service/api";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button} from "@material-ui/core";
import{ Link } from "react-router-dom";

const useStyles = makeStyles({

    table: {
    width: "90%",
margin: "50px 0 0 50px",
},

thead: {
    '& > *': {
        background: "#000000",
        color: "#FFFFFF",
        fontSize: "20px",
    },
    row: {
        '& > *': {
            fontSize: "20px",
        }
    }
}
})



const AllUsers = () => {
    const classes = useStyles();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
}

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row} key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" component={Link} style={{marginRight: "10px"}} to={`/edit/${user._id}`}>Edit</Button>
                                <Button onClick ={()=> deleteUserData(user._id)} variant="contained" color="secondary">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers;