// app/modules/ThreeDotImage/ThreeDotImages.model.js

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ThreeDotImageSchema = Schema(
  {
    imageName: {
      type: String,
      required: [true, "Please provide the image name"],
    },
    imageUrl: {
      type: String,
      required: [true, "Please provide the image URL"],
    },
    branch: {
      type: String,
      required: [true, "Please provide the branch"],
    },
  },
  { timestamps: true }
);

const ThreeDotImage = model("ThreeDotImage", ThreeDotImageSchema);

export default ThreeDotImage;