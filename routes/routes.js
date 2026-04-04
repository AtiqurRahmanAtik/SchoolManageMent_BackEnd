import { Router } from "express";

// Used Route Imports

import userRoutes from "../app/modules/User/Users.routes.js";





// Used Controllers / Middleware

import transactionLogger from "../middleware/transactionLogger.js";

// Add this line at the top with your other imports





const routes = Router();

// Middleware
routes.use(transactionLogger);

// Active Routes

routes.use("/user", userRoutes);










export default routes;
