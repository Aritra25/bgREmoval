import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "bg-removal",
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // ⏳ Set 5s timeout for MongoDB
        });

        console.log("✅ MongoDB Connected:", conn.connection.host);
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1); // ❌ Exit if connection fails
    }
};

export default connectDB;
