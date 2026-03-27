import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import resortRoutes from "./routes/resortRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

import contactRoutes from "./routes/contactRoutes.js";


dotenv.config();

// ✅ FIRST create app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/resorts", resortRoutes);
app.use("/api/bookings", bookingRoutes);

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

// Server
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});