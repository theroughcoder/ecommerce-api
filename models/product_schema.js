// schema
const mongoose = require( "mongoose");

const {ObjectId} = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      text: true,
    },
    quantity: {
      type: Number,
      required: [true, "Quantiy is required"], 
    },
  }
);
//creating model or collection
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
