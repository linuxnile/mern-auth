const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const UserModel = require("./models/User");

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => {
    console.log("Database not connected!", error.message);
  });

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const checkAlreadyExist = await UserModel.findOne({ email });

    if (checkAlreadyExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", data: savedUser });
  } catch (error) {
    res.status(500).json({ message: "Somethng went wrong" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
