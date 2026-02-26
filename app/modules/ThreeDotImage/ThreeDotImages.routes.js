import { Router } from "express";

import {
  createThreeDotImage,
  getAllThreeDotImages,
  getThreeDotImageById,
  getThreeDotImagesByBranch,
  updateThreeDotImage,
  removeThreeDotImage,
} from "./ThreeDotImages.controller.js";

import { authenticateToken } from "../../../middleware/authMiddleware.js"; 

const ThreeDotImageRoutes = Router();

// Protect all routes with authentication middleware
ThreeDotImageRoutes.get("/", authenticateToken, getAllThreeDotImages);
ThreeDotImageRoutes.get("/:branch/get-all", authenticateToken, getThreeDotImagesByBranch);
ThreeDotImageRoutes.get("/get-id/:id", authenticateToken, getThreeDotImageById);
ThreeDotImageRoutes.post("/post", authenticateToken, createThreeDotImage);
ThreeDotImageRoutes.put("/update/:id", authenticateToken, updateThreeDotImage);
ThreeDotImageRoutes.delete("/delete/:id", authenticateToken, removeThreeDotImage);

export default ThreeDotImageRoutes;