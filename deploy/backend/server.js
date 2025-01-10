import express from "express";
import dotenv from "dotenv";
import connectionDB from "./src/db/connectionDB.js";
import productRouter from "./src/routers/productRouter.js";
import cors from "cors";


dotenv.config();
const app = express();
   
app.use(express.json());
app.use(cors()); 
app.use("/api/products", productRouter);

const port = process.env.PORT || 5001;
app.get("/", (req, res) => {   
    res.send("Server is running");
    }
);

app.listen(port, () => {
  console.log(`Server is running on port  ${`http://localhost:${port}`}`);
});
connectionDB();
