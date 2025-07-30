import mongoose from "mongoose";

// Simple function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
