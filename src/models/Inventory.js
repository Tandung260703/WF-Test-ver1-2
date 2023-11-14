const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const inventorySchema = new Schema(
  {
    sku: {
      type: String,
    },
    description: {
      type: String,
    },
    inStock: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Inventory = mongoose.model("Tokens", inventorySchema);
module.exports = Inventory;
