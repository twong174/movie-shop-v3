const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const movieRoutes = require("./routes/movieRoutes");

const app = express();

// Middleware 

app.use(cors());
app.use(express.json());

app.use("/api/movies", movieRoutes);


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

