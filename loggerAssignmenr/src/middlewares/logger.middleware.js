// Please don't change the pre-written code
// Import the necessary modules here
import fs from "fs"
// Write your code here
const fsPromise = fs.promises

export const loggerMiddleware = async (req, res, next) => {
  try {
    const logData = `\n${new Date().toString()}\n req URL: ${req.url} \n reqBody: ${JSON.stringify(req.body)} `
    await fsPromise.appendFile("log.txt",logData)
    next()
  } catch (error) {
    console.log(error)
    next()
  }
  // Write your code here

};
export default loggerMiddleware;
