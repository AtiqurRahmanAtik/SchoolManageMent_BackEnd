// app/modules/ThreeDotImage/ThreeDotImages.routes.js

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
ThreeDotImageRoutes.get("/",  getAllThreeDotImages);
ThreeDotImageRoutes.get("/:branch/get-all", getThreeDotImagesByBranch);
ThreeDotImageRoutes.get("/get-id/:id",  getThreeDotImageById);
ThreeDotImageRoutes.post("/post",  createThreeDotImage);
ThreeDotImageRoutes.put("/update/:id",  updateThreeDotImage);
ThreeDotImageRoutes.delete("/delete/:id",  removeThreeDotImage);

export default ThreeDotImageRoutes;