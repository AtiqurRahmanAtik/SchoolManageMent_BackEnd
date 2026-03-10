import mongoose from "mongoose";

const { Schema, model } = mongoose;

const GoldCategorySchema = Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Please provide the category name"],
    },
     categoryImage: {
      type: String,
      required: [true, "Please provide the category name"],
    },
    branch: {
      type: String,
      required: [true, "Please provide the branch"],
    },
  },
  { timestamps: true }
);

const GoldCategory = model("GoldCategory", GoldCategorySchema);

export default GoldCategory;