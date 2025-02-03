const Cart = require("../models/Cart");
const User = require("../models/User");
const mongoose = require("mongoose");

const getCart = async (req, res) => {
  try {
    if (!req.isAuthenticated()) {
      return res
        .status(401)
        .json({ authenticated: false, message: "Not authenticated" });
    }

    const userCart = await Cart.findOne({ userId: req.user._id });

    if (!userCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.json({ authenticated: true, cart: userCart });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addToCart = async (req, res) => {
  try {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const { productId, movieName, moviePrice } = req.body;

    // Generate a new ObjectId instead of using the IMDb ID
    const objectIdProductId = new mongoose.Types.ObjectId();

    let userCart = await Cart.findOne({ userId: req.user._id });

    if (!userCart) {
      userCart = new Cart({
        userId: req.user._id,
        items: [
          {
            productId: objectIdProductId,
            movieName,
            moviePrice,
            imdbId: productId, // Store the original IMDb ID as a reference
          },
        ],
      });
    } else {
      const existingItem = userCart.items.find(
        (item) => item.imdbId === productId
      );
      if (existingItem) {
        return res.status(400).json({ message: "Item already in cart" });
      }

      userCart.items.push({
        productId: objectIdProductId,
        movieName,
        moviePrice,
        imdbId: productId,
      });
    }

    await userCart.save();
    res.status(201).json({ message: "Added to cart!", cart: userCart });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = { getCart, addToCart };
