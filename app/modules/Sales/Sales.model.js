import mongoose from "mongoose";

const { Schema, model } = mongoose;

const SaleSchema = Schema(
  {
    invoiceNumber: {
      type: String,
      required: [true, "Please provide the invoice number"],
      unique: true,
    },
    saleDate: {
      type: Date,
      required: [true, "Please provide the sale date"],
    },
    customer: {
      type: String,
      required: [true, "Please provide the customer"],
    },
    addProduct: {
      type: Array,
      required: [true, "Please provide the products"],
    },
    paymentSummary: {
      type: Object,
      required: [true, "Please provide the payment summary"],
    },
    paymentMethod: {
      type: String,
      required: [true, "Please provide the payment method"],
    },
    note: {
      type: String,
    },
    branch: {
      type: String,
      required: [true, "Please provide the branch"],
    },
  },
  { timestamps: true }
);

const Sale = model("Sale", SaleSchema);

export default Sale;