"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_model_1 = require("./products.model");
const products = [];
products.push(new products_model_1.Product(1, "Dog Toy", "This is a fantastic dog toy. Dogs love it.", 15));
products.push(new products_model_1.Product(2, "Marrow Bone", "Fun chewing and great for teeth.", 3));
exports.productsSample = products;
