import { Router } from "express";

// Used Route Imports

import userRoutes from "../app/modules/User/Users.routes.js";





// Used Controllers / Middleware

import transactionLogger from "../middleware/transactionLogger.js";
import ClassRoutes from "../app/modules/Class/Classes.routes.js";
import TeacherRoutes from "../app/modules/Teacher/Teachers.routes.js";
import SectionRoutes from "../app/modules/Section/Sections.routes.js";
import StudentRoutes from "../app/modules/Student/Students.routes.js";
import EmployeeRoleRoutes from "../app/modules/EmployeeRole/EmployeeRoles.routes.js";
import EmployeeRoutes from "../app/modules/Employee/Employees.routes.js";

// Add this line at the top with your other imports





const routes = Router();

// Middleware
routes.use(transactionLogger);

// Active Routes

routes.use("/user", userRoutes);



// DashBoard 
routes.use("/class", ClassRoutes);

routes.use("/students", StudentRoutes); // Newly registered Student endpoint
routes.use("/teachers", TeacherRoutes);
routes.use("/sections", SectionRoutes);

routes.use("/employee-roles", EmployeeRoleRoutes);

routes.use("/employee", EmployeeRoutes);












export default routes;
