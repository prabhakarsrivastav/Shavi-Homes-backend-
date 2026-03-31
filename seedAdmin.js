require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/shavi-homes");
    
    // Check if admin already exists
    const adminExists = await User.findOne({ email: "admin@gmail.com" });
    if (adminExists) {
      console.log("Admin already exists!");
      process.exit();
    }

    const admin = await User.create({
      name: "Super Admin",
      email: "admin@gmail.com",
      password: "admin123",
      role: "super-admin",
    });

    console.log("Admin user created successfully!");
    console.log("Email: admin@gmail.com");
    console.log("Password: admin123");
    process.exit();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedAdmin();
