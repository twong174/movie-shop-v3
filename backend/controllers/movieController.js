const axios = require("axios");

const getMovie = async (req, res) => {
  try { 
    const { movieTitle } = req.query;

    if (!movieTitle) {
      return res.status(400).send({error: "Movie does not exist"});
    }

    const movieURL = `http://www.omdbapi.com/?t=${movieTitle}&apikey=${process.env.API_KEY}`
    const response = await axios.get(movieURL);
    res.send(response.data);
  } catch (error) { 
    console.log(error);
  }
};

module.exports = {getMovie};