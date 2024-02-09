// Please don't change the pre-written code
// Import the necessary modules here

import { addUser, confirmLogin } from "../model/user.model.js";
import jwt from "jsonwebtoken"

export const registerUser = (req, res, next) => {
  const userData = req.body;
  if (userData) {
    let user = addUser(userData);
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  const status = confirmLogin(req.body);
  console.log(status)
  // console.log(status)
  if (status.id) {
       const token = jwt.sign({userId:status.id,email:status.email},"Wln0ImtXwBi7Kuqp06QwJJ9YmCc3d96I",{expiresIn:"1h"})
       res.cookie('jwtToken', token, { maxAge: 3600000, httpOnly: true });
    res
      .status(200)
      .json({ status: "success", msg: "login successfull", token });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};
