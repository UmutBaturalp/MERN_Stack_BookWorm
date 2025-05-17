import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/booksRoutes.js";
import connectDB from "./lib/db.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`server is runnig on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  connectDB();
});
