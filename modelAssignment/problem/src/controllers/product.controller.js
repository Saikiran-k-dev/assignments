import ProductModel from "../models/product.model.js";

export default class ProductController {
  constructor() {
    this.productModel = new ProductModel();
  }

  getProducts = (req, res) => {

      const fetchedProducts = new ProductModel()
      let  data = fetchedProducts.fetchProducts()
      res.send(data)
    
  };
}
