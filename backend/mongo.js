import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected Tab");
  } catch (error) {
    console.error(error.message || error);
    throw new Error("Failed to connect to db");
  }
};
