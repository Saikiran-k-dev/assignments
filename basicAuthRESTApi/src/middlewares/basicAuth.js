// Please don't change the pre-written code
// Import the necessary modules here
import { getAllUsers} from "../features/user/model/user.model.js";

const basicAuthMiddleware = (req,res,next) => {
  // Write your code here
  const authHeader = req.headers["authorization"]
  if(!authHeader){
    return res.status(401).send({"success":"false","message":"no authorization details found"})
  }
  const base64Data = authHeader.replace('Basic','')
  const decoded = Buffer.from(base64Data,"base64").toString('utf-8')
  const creds = decoded.split(':')
  const isValidUser = getAllUsers().find(u=>u.email==creds[0]&&u.password==creds[1])
  if(!isValidUser){
    return res.status(401).send({"success":"false","message":"authorization failed"})
  } else {
   next()
  }

};

export default basicAuthMiddleware;
