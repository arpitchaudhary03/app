import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');



const User = mongoose.model('User', userSchema);
export default User;