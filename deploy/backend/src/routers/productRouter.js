
import express from 'express';
import { addProducts, deleteProduct, getProductById, getProducts } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post("/", addProducts);
productRouter.delete("/:id", deleteProduct);
productRouter.get("/", getProducts);
productRouter.get("/:id", getProductById);

export default productRouter;