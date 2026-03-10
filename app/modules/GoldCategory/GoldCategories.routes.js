import { Router } from "express";

import {
  createGoldCategory,
  getAllGoldCategories,
  getGoldCategoryById,
  getGoldCategoriesByBranch,
  updateGoldCategory,
  removeGoldCategory,
} from "./GoldCategories.controller.js";

import { authenticateToken } from "../../../middleware/authMiddleware.js"; 

const GoldCategoryRoutes = Router();

// Protect all routes with authentication middleware
GoldCategoryRoutes.get("/",  getAllGoldCategories);
GoldCategoryRoutes.get("/:branch/get-all",  getGoldCategoriesByBranch);
GoldCategoryRoutes.get("/get-id/:id",  getGoldCategoryById);
GoldCategoryRoutes.post("/post",  createGoldCategory);
GoldCategoryRoutes.put("/update/:id",  updateGoldCategory);
GoldCategoryRoutes.delete("/delete/:id",  removeGoldCategory);

export default GoldCategoryRoutes;