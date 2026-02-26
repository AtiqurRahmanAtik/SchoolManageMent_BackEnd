import { Router } from "express";

import {
  createProduct,
  getAllProducts,
  getProductById,
  getProductsByBranch,
  updateProduct,
  removeProduct,
} from "./Product.controller.js";
import { authenticateToken } from "../../../middleware/authMiddleware.js"; 

const ProductRoutes = Router();

// Protect all routes with authentication middleware
ProductRoutes.get("/", authenticateToken, getAllProducts);
ProductRoutes.get("/:branch/get-all", authenticateToken, getProductsByBranch);
ProductRoutes.get("/get-id/:id", authenticateToken, getProductById);
ProductRoutes.post("/post", authenticateToken, createProduct);
ProductRoutes.put("/update/:id", authenticateToken, updateProduct);
ProductRoutes.delete("/delete/:id", authenticateToken, removeProduct);

export default ProductRoutes;