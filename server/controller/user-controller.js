import User from '../model/user-schema.js';



export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const addUser = async (req, res) => {
    console.log(!req.body.name);
    if (!req.body.name) {
        console.log(req.body);
        return res.status(400).json({ message: "payload not found" });
    } else {
        console.log(req.body, "req line 15");
        const user = req.body;

        var newUser = new User(user);
    }
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.json({ message: error.message });
    }
}


export const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const editUser = async (request, response) => {
    let user = await User.findById(request.params.id);
    user = request.body;

    const editUser = new User(user);
    try {
        await User.updateOne({ _id: request.params.id }, editUser);
        response.status(201).json(editUser);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id });
        res.json("User deleted successfully");
    } catch (error) {
        res.json({ message: error.message });
    }
}