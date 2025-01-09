import express from "express";
import { addProduct, deleteProduct } from "../controllers/productController.js";
export const productRouter = express.Router();
productRouter.get("/", (req, res) => {
  res.send("Product List");
});
productRouter.post("/", addProduct);
productRouter.delete("/:id", deleteProduct);

