import mongoose from "mongoose";

const connectDB = async () => {
    // mongoose.connection.on('connected', () => {
    //     console.log('Connected to MongoDB');
    // })
    await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`).then(() => console.log("connected to MongoDB")).catch(() => console.log("Failed to connect to MongoDB"));
}

export default connectDB;