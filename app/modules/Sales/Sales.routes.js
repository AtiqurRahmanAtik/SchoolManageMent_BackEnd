import { Router } from "express";

import {
  createSale,
  getAllSales,
  getSaleById,
  getSalesByBranch,
  updateSale,
  removeSale,
} from "./Sales.controller.js";

import { authenticateToken } from "../../../middleware/authMiddleware.js"; 

const SaleRoutes = Router();

// Protect all routes with authentication middleware
SaleRoutes.get("/", authenticateToken, getAllSales);
SaleRoutes.get("/:branch/get-all", authenticateToken, getSalesByBranch);
SaleRoutes.get("/get-id/:id", authenticateToken, getSaleById);
SaleRoutes.post("/post", authenticateToken, createSale);
SaleRoutes.put("/update/:id", authenticateToken, updateSale);
SaleRoutes.delete("/delete/:id", authenticateToken, removeSale);

export default SaleRoutes;