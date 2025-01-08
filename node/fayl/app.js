import express from "express";
import "dotenv/config";
import "./src/db/dbConnection.js";

const port = process.env.PORT || 5001;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(  port, () => {
  console.log(`Server is running on port ${`http://localhost:${port}`}`);
});
