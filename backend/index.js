const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGOOSE_URL);

// Middleware 

app.use(cors());
app.use(express.json());

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

