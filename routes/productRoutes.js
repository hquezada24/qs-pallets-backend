const { Router } = require("express");
const productRouter = Router();
const productController = require("../controllers/productController");

productRouter.get("/", productController);

module.exports = productRouter;
