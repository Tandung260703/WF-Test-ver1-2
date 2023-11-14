const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    item: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
