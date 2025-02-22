const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  items: [
    {
      productId: {
        type: String,
        required: true,
      },
      movieName: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  transactionDate: { 
    type: Date, 
    required: true,
  },
});

const OrderModel = mongoose.model("orders", OrderSchema);

module.exports = OrderModel;
