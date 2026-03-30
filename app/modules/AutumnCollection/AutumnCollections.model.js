// File: AutumnCollections.model.js

import mongoose from "mongoose";

const { Schema, model } = mongoose;

const AutumnCollectionSchema = Schema(
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
      type: String,
      required: [true, "Please provide the original price"],
    },
    wages: {
      type: String,
      required: [true, "Please provide the wages"],
    },
    totalPrice: {
      type: String,
      required: [true, "Please provide the total price"],
    },
    quantity: {
      type: String,
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
      type: String,
      required: [true, "Please provide the weight"],
    },
    branch: {
      type: String,
      required: [true, "Please provide the branch"],
    },
  },
  { timestamps: true }
);

const AutumnCollection = model("AutumnCollection", AutumnCollectionSchema);

export default AutumnCollection;