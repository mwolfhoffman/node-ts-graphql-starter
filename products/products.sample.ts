import { Product } from "./products.model";

const products: Array<Product> = [];

products.push(
  new Product(1, "Dog Toy", "This is a fantastic dog toy. Dogs love it.", 15)
);
products.push(
  new Product(2, "Marrow Bone", "Fun chewing and great for teeth.", 3)
);
exports.productsSample = products;
