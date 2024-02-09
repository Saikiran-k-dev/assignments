import express from "express";
import cors from "cors"

import empRoutes from "./routes/employee.route.js";

const app = express();
app.use(cors())
// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here

app.use("/api/v1/emp", empRoutes);

export default app;
