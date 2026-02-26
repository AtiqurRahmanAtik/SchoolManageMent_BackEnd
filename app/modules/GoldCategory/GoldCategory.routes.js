import { Router } from "express";

import {
  createGoldCategory,
  getAllGoldCategories,
  getGoldCategoryById,
  getGoldCategoriesByBranch,
  updateGoldCategory,
  removeGoldCategory,
} from "./GoldCategory.controller.js";
import { authenticateToken } from "../../../middleware/authMiddleware.js"; 

const GoldCategoryRoutes = Router();

// Protect all routes with authentication middleware
GoldCategoryRoutes.get("/", authenticateToken, getAllGoldCategories);
GoldCategoryRoutes.get("/:branch/get-all", authenticateToken, getGoldCategoriesByBranch);
GoldCategoryRoutes.get("/get-id/:id", authenticateToken, getGoldCategoryById);
GoldCategoryRoutes.post("/post", authenticateToken, createGoldCategory);
GoldCategoryRoutes.put("/update/:id", authenticateToken, updateGoldCategory);
GoldCategoryRoutes.delete("/delete/:id", authenticateToken, removeGoldCategory);

export default GoldCategoryRoutes;