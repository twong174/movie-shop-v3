const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },

  movieName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const CartModel = mongoose.model("carts", CartSchema);

module.exports = CartModel;
