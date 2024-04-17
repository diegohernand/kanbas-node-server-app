import express from "express";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import cors from "cors";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import Hello from "./Hello.js";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import dotenv from "dotenv";


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING 

mongoose.connect("mongodb+srv://giuseppi:supersecretpassword@cluster0.hiyo5yg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const app = express();
app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
   );
app.use(express.json());
UserRoutes(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
app.listen(process.env.PORT || 4000);

