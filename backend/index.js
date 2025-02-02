const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const loginRoute = require("./routes/loginRoute");
const logoutRoute = require("./routes/logoutRoute");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
require('./config/passportConfig');

const app = express();

mongoose.connect(process.env.MONGOOSE_URL);

// Middleware

app.use(cors());
app.use(express.json());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);
app.use("/", loginRoute);
app.use("/", logoutRoute);


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
