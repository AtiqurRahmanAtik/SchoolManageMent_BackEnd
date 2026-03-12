import { Router } from "express";

import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  getCustomersByBranch,
  updateCustomer,
  removeCustomer,
} from "./Customers.controller.js";

import { authenticateToken } from "../../../middleware/authMiddleware.js"; 

const CustomerRoutes = Router();

// Protect all routes with authentication middleware
CustomerRoutes.get("/",  getAllCustomers);
CustomerRoutes.get("/:branch/get-all",  getCustomersByBranch);
CustomerRoutes.get("/get-id/:id",  getCustomerById);
CustomerRoutes.post("/post",  createCustomer);
CustomerRoutes.put("/update/:id", updateCustomer);
CustomerRoutes.delete("/delete/:id",  removeCustomer);

export default CustomerRoutes;