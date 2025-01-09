import express from "express";
import "dotenv/config";
import "./src/db/dbConnection.js";
import { productRouter } from "./src/routers/productRouter.js";

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use("/api/products", productRouter);


app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/post", (req, res) => {
  res.send("Product has been added to the database");
});
app.listen(  port, () => {
  console.log(`Server is running on port ${`http://localhost:${port}`}`);
});
