const express = require("express");
const passport = require("passport");
const axios = require("axios");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const session = require("express-session");
require("./config/passportConfig");
const User = require("./models/UserModel");
const Cart = require("./models/CartModel");
const bcrypt = require("bcrypt");

mongoose.connect(process.env.MONGOOSE_URL);
const PORT = process.env.PORT || 8000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.post("/login", async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      res
        .status(401)
        .json({ authenticated: false, message: "User not found!" });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.json({ authenticated: true, user });
    });
  })(req, res, next);
});

app.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ message: "Error logging out!" });

    req.session.destroy((err) => {
      if (err)
        return res.status(500).json({ message: "Error destorying session" });

      res.clearCookie("connect.sid", { path: "/" });

      return res.json({ authenticated: false, message: "Logged out!" });
    });
  });
});

app.get("/authStatus", async (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false });
  }
});

app.post("/registerUser", async (req, res) => {
  try {
    const { firstName, username, emailAddress, password } = req.body;

    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      firstName,
      username,
      emailAddress,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).send({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.get("/getUser", async (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res
      .status(401)
      .json({ authenticated: false, message: "Not authenticated!" });
  }
});

app.get("/getMovie", async (req, res) => {
  try {
    const { movieTitle } = req.query;

    if (!movieTitle) {
      return res.status(400).send({ error: "Movie does not exist" });
    }

    const movieURL = `http://www.omdbapi.com/?t=${movieTitle}&apikey=${process.env.API_KEY}`;
    const response = await axios.get(movieURL);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.post('/addToCart', async (req, res) => { 
  try { 
    const {movieName, price} = req.body;

    const formattedPrice = parseFloat(price).toFixed(2)

    const newCart = new Cart({
      productId: new mongoose.Types.ObjectId(),
      movieName,
      price: formattedPrice,
    })

    console.log("Generated productId:", newCart.productId);  // This should not be null

    await newCart.save();

    res.status(201).send({message: "Successfully added to cart!"});
  } catch (error) { 
    console.log(error)
  }
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${process.env.PORT}`);
});
