// File: AutumnCollections.routes.js

import { Router } from "express";

import {
  createAutumnCollection,
  getAllAutumnCollections,
  getAutumnCollectionById,
  getAutumnCollectionsByBranch,
  updateAutumnCollection,
  removeAutumnCollection,
} from "./AutumnCollections.controller.js";

import { authenticateToken } from "../../../middleware/authMiddleware.js"; 

const AutumnCollectionRoutes = Router();

// Protect all routes with authentication middleware
AutumnCollectionRoutes.get("/", getAllAutumnCollections);
AutumnCollectionRoutes.get("/:branch/get-all",  getAutumnCollectionsByBranch);
AutumnCollectionRoutes.get("/get-id/:id",getAutumnCollectionById);
AutumnCollectionRoutes.post("/post",  createAutumnCollection);
AutumnCollectionRoutes.put("/update/:id",updateAutumnCollection);
AutumnCollectionRoutes.delete("/delete/:id",removeAutumnCollection);

export default AutumnCollectionRoutes;