import express from "express";
import { addProduct,deleteProduct,getProductById,getProducts,updateProduct } from "../controllers/productController.js";
const productRouter= express.Router();
productRouter.post("/",addProduct)
productRouter.delete("/:id",deleteProduct)
productRouter.get("/",getProducts)
productRouter.get("/:id",getProducts)
productRouter.post("/:id",updateProduct)

export default productRouter;

