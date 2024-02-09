// Please don't change the pre-written code
// Import the necessary modules here

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  const alreadyExisted = cartItems.findIndex(c=>c.userId==userId&&c.productId==productId)
  if(alreadyExisted>=0){
    const updateQuantity = cartItems[alreadyExisted].quantity

    cartItems[alreadyExisted]=new cartModel(userId,parseInt(productId),updateQuantity+parseInt(quantity))
    const items = cartItems.filter(c => c.userId == userId);

    // console.log(cartItems)
    return items
  } else {
    // console.log(cartItems)
    const newItem = new cartModel(userId,parseInt(productId),quantity)
    cartItems.push(newItem)
    // console.log(userId)
    const items = cartItems.filter(c => c.userId == userId);

    // console.log(items)
    return items
  }
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here
  const itemFound = cartItems.findIndex(c=>c.id==cartItemId&&c.userId==userId)
  if(itemFound>=0){
    const item = cartItems[itemFound]
    cartItems.splice(itemFound,1)
    return item
  }
};
