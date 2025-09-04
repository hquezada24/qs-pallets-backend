// test-app-creation.js
console.log("Testing app creation...");
const express = require("express");
console.log("Express loaded");

const app = express();
console.log("App created");

app.use(express.json());
console.log("JSON middleware added");

const cors = require("cors");
console.log("CORS loaded");

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
console.log("CORS middleware added");

console.log("Everything configured, about to listen...");

app.listen(8000, () => console.log("Server running!"));
