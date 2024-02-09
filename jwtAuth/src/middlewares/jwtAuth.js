// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken"
const jwtAuth = (req, res, next) => {
  // Write your code here
  const token = req.headers['authorization']
  // console.log(token)
  if(!token){
    return res.status(401).json({"status":"failure","msg":"invalid user details"})
  }
  try {
    const payload = jwt.verify(token,"Wln0ImtXwBi7Kuqp06QwJJ9YmCc3d96I")
    // console.log(payload)
  } catch (error) {
    // console.log(error)
    return res.status(401).json({"success":"failure","msg":{"name":"JsonWebtokenError","message":"jwt must be provided"}})
  }
  next()
};

export default jwtAuth;
