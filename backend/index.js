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
const Order = require("./models/OrderModel");
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

app.post("/addToCart", async (req, res) => {
  try {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "User not authenticated!" });
    }

    const { productId, movieName, price } = req.body;

    const userId = req.user._id;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [],
      });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId === productId
    );

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += 1;
    } else {
      cart.items.push({
        productId,
        movieName,
        price: parseFloat(price),
        quantity: 1,
      });
    }

    await cart.save();

    res.status(201).send({ message: "Successfully added to cart!" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/getCart", async (req, res) => {
  try {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "User not authenticated!" });
    }

    const userId = req.user._id;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(200).json({ items: [] });
    }

    res.status(200).json({ items: cart.items });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching cart!" });
  }
});

app.post("/deleteItem", async (req, res) => {
  try {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "User not authenticated!" });
    }

    const userId = req.user._id;

    const { productId } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(401).json({ message: "Cart not found!" });
    }

    const initialLength = cart.items.length;
    cart.items = cart.items.filter((item) => item.productId !== productId);

    if (cart.items.length === initialLength) {
      return res.status(404).json({ message: "Item not found in the cart!" });
    }

    await cart.save();
    return res
      .status(201)
      .json({ message: "Successfully removed item from cart" });
  } catch (error) {
    console.log(error);
  }
});

app.post("/checkout", async (req, res) => {
  try {
    const { cartItems, totalAmount, transactionDate } = req.body;

    const order = new Order({
      userId: req.user._id,
      items: cartItems,
      totalAmount: totalAmount,
      transactionDate: transactionDate,
    });

    await order.save();

    res.status(200).send("Order placed!");
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while placing the order.");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${process.env.PORT}`);
});
