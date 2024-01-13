import { userModel } from "../models/users.model.js";

export const userController = async (req, res) => {
  
    const users = await userModel();
    console.log( users );
    res.render("index", users );
 
};
// userController()