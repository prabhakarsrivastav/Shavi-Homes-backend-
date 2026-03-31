require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const consultationRoutes = require("./routes/consultationRoutes");
const authRoutes = require("./routes/authRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/consultations", consultationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/testimonials", testimonialRoutes);

// Root route (for health check)
app.get("/", (req, res) => {
  res.send("Shavi Homes API is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
