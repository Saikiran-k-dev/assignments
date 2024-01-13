// Please don't change the pre-written code
// Import the necessary modules here
import path from "path"
import ProductModel from "../../../../inventory-mgmt/src/models/products.models.js";

export const getProducts = (req, res) => {
  let products = ProductModel.get()
  res.sendFile(
    path.join(path.resolve(),'src','views','index.html')
  )

};
