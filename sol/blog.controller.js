export const validateBlog = (req, res) => {
  // Write your code here
  let errors = [];
  const { title, description, image } = req.body; // Corrected variable names
  console.log(req.body);

  if (title.length == 0) {
    errors.push("The title field should not be empty.");
  }
  if (title.length < 3) {
    errors.push("The title field should contain at least 3 characters.");
  }
  if (description.length == 0) {
    errors.push("The description field should not be empty.");
  }
  if (description.length < 10) {
    errors.push("The description field should contain at least 10 characters.");
  }
  
  try {
    const validUrl = new URL(image)
  } catch (error) {
    errors.push("The image URL provided should be a valid URL.")
  }
  if (errors.length > 0) {
    res.render("addBlog", { errors, success: false });
  }
  else{
    errors.push("Validation successful!")
    res.status(201).render("addBlog", { errors, success: false });
  }

  console.log(errors);
  
  
  
};

export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: true });
};