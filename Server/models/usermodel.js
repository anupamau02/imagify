import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    creditBalance: { type: Number, default: 5 },
})

//checks if there already exists a user model first and only creates one if it doesnt exist and creates a model for the user.
const usermodel = mongoose.models.user || mongoose.model("user", userSchema)

export default usermodel;
//we use this to create different APIS that enables the user to login, logout, buy credits etc.