const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes")
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
require("./config/passportConfig");

const app = express();

mongoose.connect(process.env.MONGOOSE_URL);

// Middleware

app.use(cors({
  origin: "http://localhost:5173", credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false, httpOnly: true},
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
