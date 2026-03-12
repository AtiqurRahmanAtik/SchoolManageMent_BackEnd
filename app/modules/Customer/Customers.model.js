import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CustomerSchema = Schema(
  {
    customerName: {
      type: String,
      required: [true, "Please provide the customer name"],
    },
    branch: {
      type: String,
      required: [true, "Please provide the branch"],
    },
  },
  { timestamps: true }
);

const Customer = model("Customer", CustomerSchema);

export default Customer;