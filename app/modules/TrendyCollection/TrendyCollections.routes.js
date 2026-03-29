// File: TrendyCollections.routes.js

import { Router } from "express";
import {
  createTrendyCollection,
  getAllTrendyCollections,
  getTrendyCollectionById,
  getTrendyCollectionsByBranch,
  updateTrendyCollection,
  removeTrendyCollection,
} from "./TrendyCollections.controller.js";
import { authenticateToken } from "../../../middleware/authMiddleware.js"; 

const TrendyCollectionRoutes = Router();

// Protect all routes with authentication middleware
TrendyCollectionRoutes.get("/",  getAllTrendyCollections);
TrendyCollectionRoutes.get("/:branch/get-all",  getTrendyCollectionsByBranch);
TrendyCollectionRoutes.get("/get-id/:id", getTrendyCollectionById);
TrendyCollectionRoutes.post("/post",  createTrendyCollection);
TrendyCollectionRoutes.put("/update/:id",  updateTrendyCollection);
TrendyCollectionRoutes.delete("/delete/:id",  removeTrendyCollection);

export default TrendyCollectionRoutes;