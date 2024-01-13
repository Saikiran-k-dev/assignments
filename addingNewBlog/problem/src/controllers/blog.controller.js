// Please don't change the pre-written code
// Import the necessary modules here
import { blogs } from "../models/blog.model.js";
export const renderBlogs = (req,res) => {
  // Write your code here
  let blogDatas = blogs
  res.render("blogs",{blogDatas})
  
};
export const renderBlogForm = (req,res) => {
  // Write your code here
  res.render("addBlogForm")
};
export const addBlog = (req,res) => {
  // Write your code 
  blogs.push(req.body)
  let blogDatas=blogs

  res.render("blogs",{blogDatas})
  
};
// renderBlogs()
