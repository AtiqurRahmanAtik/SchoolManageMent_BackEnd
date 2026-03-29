// File: TrendyCollections.model.js

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const TrendyCollectionSchema = Schema(
  {
    productName: {
      type: String,
      required: [true, "Please provide the product name"],
    },
    imageUrl: {
      type: String,
      required: [true, "Please provide the image URL"],
    },
    productTitle: {
      type: String,
      required: [true, "Please provide the product title"],
    },
    originalPrice: {
      type: Number,
      required: [true, "Please provide the original price"],
    },
    wages: {
      type: Number,
      required: [true, "Please provide the wages"],
    },
    totalPrice: {
      type: Number,
      required: [true, "Please provide the total price"],
    },
    quantity: {
      type: Number,
      required: [true, "Please provide the quantity"],
    },
    estimatedDelivery: {
      type: String,
      required: [true, "Please provide the estimated delivery"],
    },
    category: {
      type: String,
      required: [true, "Please provide the category"],
    },
    weight: {
      type: Number,
      required: [true, "Please provide the weight"],
    },
    branch: {
      type: String,
      required: [true, "Please provide the branch"],
    },
  },
  { timestamps: true }
);

const TrendyCollection = model("TrendyCollection", TrendyCollectionSchema);

export default TrendyCollection;