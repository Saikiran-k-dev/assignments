// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here

import { fetchAllProducts,rateProductModel } from "../model/product.model.js";

export const getAllProducts = (req, res, next) => {
  const products = fetchAllProducts();
  res.json({ success: true, products });
};
export const getOneProduct = (req, res, next) => {
  res.json({ success: true, msg: "getOneProduct working" });
};
export const addProduct = (req, res, next) => {
  res.json({ success: true, msg: "addProduct working" });
};
export const rateProduct = (req, res, next) => {
  // Write your code here
  const userId = req.query.userId
  const productId = req.query.productId
  const rating = req.query.rating
  if(parseInt(rating)<0 || parseInt(rating)>5){
    return res.status(401).json({
      "success": false,
      "msg": "rating should be b/w 0 and 5"
  })
  }
  const error = rateProductModel(productId,userId,rating)
  console.log(error)
  if(error=="user not found"){
    return res.status(401).json({
      "success": false,
      "msg" : error
  })
  } else if(error == "product not found"){
    return res.status(401).json({
      "success": false,
      "msg" : error
  }) 
  } else {
    res.status(200).json({
      "success": true,
      "product": error
    })
  }
};
