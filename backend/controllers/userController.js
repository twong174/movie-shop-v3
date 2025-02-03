const bcrypt = require("bcrypt");
const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, username, emailAddress, password } = req.body;

    const existingUser = await User.findOne({ username, emailAddress });

    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }

    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      firstName,
      lastName,
      username,
      emailAddress,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const getUser = async (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.status(401).json({ authenticated: false, message: "Not authenticated" });
  }
};

module.exports = { registerUser, getUser };
