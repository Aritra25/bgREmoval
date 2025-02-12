import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
    index: true 
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: String, // No need to comment `required: true`
  lastName: String,   // as it's not required anyway
  creditBalance: {
    type: Number,
    default: 5,
  },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
