import axios from "axios";
const production = 'https://mernarpit.herokuapp.com/users';
const development = 'http://localhost:000/';
const url = (process.env.NODE_ENV ? production : development);


export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user);
}

export const addUser = async (user) => {
    console.log(user);
    return await axios.post(`${url}/add`, user);

}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}

