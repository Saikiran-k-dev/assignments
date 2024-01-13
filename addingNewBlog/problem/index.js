// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { renderBlogs,renderBlogForm,addBlog } from "./src/controllers/blog.controller.js";
const app = express();

app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

app.get("/createBlog", renderBlogForm)
app.get("/",renderBlogs)
app.post("/addblog",addBlog)
// Write your code here

export default app;
