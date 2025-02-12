import mongoose from "mongoose";

const connectDB = async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // ⏳ 5-second timeout
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("MongoDB connection error:", error);
    }
  };
  

export default connectDB;
