// Please don't change the pre-written code
// Import the necessary modules here
import { addToCart,removeFromCart } from "../model/cart.model.js";


export const addToCartController = (req, res) => {
  // Write your code here
  const userId = req.userId
  const productId = req.query.productId
  const quantity = req.query.quantity

  const items = addToCart(userId,productId,quantity)
  res.status(201).json({
    "success": true,
    "item": items
})
};

export const removeFromCartController = (req, res) => {
  // Write your code here
  const userId = req.userId
  const cartItemId = req.params.itemId

  const removedItem = removeFromCart(userId,cartItemId)
  if(removedItem){
    return res.status(201).json({
      "success": true,
      "deletedCartItem": removedItem
  })
  } else {
    res.status(401).json({
      "success": false,
      "msg": "operation not allowed"
  })
  }
};
