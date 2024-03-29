// Please don't change the pre-written code
// Import the necessary modules here
import { addUser,confirmLogin } from "../model/user.model.js";
export const registerUser = (req, res, next) => {
  // Write your code here
  console.log(req.body)
  const newUser = addUser(req.body)
  res.status(201).send({"status":"success","user":newUser})
};

export const loginUser = (req, res) => {
  // Write your code here
  const isValidUser = confirmLogin(req.body)
  if(!isValidUser){
    return res.status(400).send({"status":"failure","msg":"invalid user details"})
  } else {
    res.status(200).send({"status":"success","msg":"login successful"})
  }

};
