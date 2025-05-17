import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to mongoDB ${con.connection.host}`);
  } catch (error) {
    console.log(`Connection failed: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
