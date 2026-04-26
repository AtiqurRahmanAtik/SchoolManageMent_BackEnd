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
import StudentAttendanceRoutes from "../app/modules/StudentAttendance/StudentAttendances.routes.js";
import EmployeeAttendanceRoutes from "../app/modules/EmployeeAttendance/EmployeeAttendance.routes.js";
import SubjectRoutes from "../app/modules/Subject/Subjects.routes.js";
import ClassRoutineRoutes from "../app/modules/ClassRoutine/ClassRoutine.routes.js";
import ClassTimeRoutes from "../app/modules/ClassTime/ClassTime.routes.js";
import DayRoutes from "../app/modules/Day/Day.routes.js";
import ExaminationRoutes from "../app/modules/Examination/Examination.routes.js";


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

routes.use("/subjects", SubjectRoutes);

routes.use("/employee-roles", EmployeeRoleRoutes);

routes.use("/employee", EmployeeRoutes);


routes.use("/student-attendance", StudentAttendanceRoutes);
routes.use("/employee-attendance", EmployeeAttendanceRoutes);


routes.use("/class-routine", ClassRoutineRoutes);
routes.use("/class-time", ClassTimeRoutes);
routes.use("/day", DayRoutes);

routes.use("/examination", ExaminationRoutes);









export default routes;
