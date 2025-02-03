const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      movieName: {
        type: String,
        required: true,
      },
      moviePrice: {
        type: Number,
        required: true,
      },
    },
  ],
});

const CartModel = mongoose.model("carts", CartSchema);
module.exports = CartModel;
