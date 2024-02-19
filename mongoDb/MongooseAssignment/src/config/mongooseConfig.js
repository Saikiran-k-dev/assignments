// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";

export const connectUsingMongoose = async () => {
  // write your code here
try {
  await mongoose.connect('mongodb://127.0.0.1:27017',{
    useNewUrlParser:true,
    useUnifiedTopology:true

  })
  console.log("mongoose is connected")
} catch (error) {
  console.log(error)
}
}