const axios = require("axios");
const bcrypt = require("bcrypt");
const User = require("../models/User");

app.post("/registerUser", async (req, res) => {
  try {
    const { firstName, lastName, username, emailAddress, password } = req.body;

    const existingUser = User.findOne({ username });

    if (existingUser) {
      res.status(400).send({ message: "User already exists" });
    }

    const saltRounds = 10;

    hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      firstName,
      lastName,
      username,
      emailAddress,
      password: hashedPassword,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
  }
});

app.get("/getUser", async (req, res) => {});
