import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import likesRoutes from "./routes/likes.js";
import chatRoutes from "./routes/chat.js";

dotenv.config();
const app = express();

app.use(
  cors({ origin: "https://meetyapp-client-test.vercel.app", credentials: true })
);
app.options("*", cors()); // Handle preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/likes", likesRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
