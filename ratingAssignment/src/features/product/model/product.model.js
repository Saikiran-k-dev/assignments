// Please don't change the pre-written code
// Import the necessary modules here
import { getAllUsers } from "../../user/model/user.model.js";
let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "oneplus", price: 50000 },
  { id: 3, name: "samsung", price: 60000 },
];

export const fetchAllProducts = () => {
  return products;
};

export const rateProductModel = (productId, userId, rating) => {
  // Write your code here
  const users = getAllUsers().find(u=>u.id==userId)
  if(!users){
    return("user not found")
  }
  const product = products.find(p=>p.id==productId)
  if(!product){
    return("product not found")
  } else {
    if(!product.rating){
      product.rating = []
      product.rating.push({rating:rating,userId:userId})
      return product
    } else {
      const existedUser = product.rating.findIndex(u=>u.userId==userId)
      if(existedUser>=0){
        product.rating[existedUser] = {
          rating:rating,userId:userId
        } 
        return product
      } else {
        product.rating.push({rating:rating,userId:userId})
        return product
      }
    }
  }

};
