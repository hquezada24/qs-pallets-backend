const express = require("express");
const app = express();

// Add logging for each require
console.log("Loading routes...");
const indexRoutes = require("./routes/indexRoutes");
const productsRoutes = require("./routes/productRoutes");
const requestRoutes = require("./routes/requestRoutes");
const contactRoutes = require("./routes/contactRoutes");
console.log("Loaded routes...");

const cors = require("cors");
require("dotenv").config();
// const aboutRoutes = require("./routes/aboutRoutes");

// Parse JSON for API requests
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173", // or whatever your React app's port is
  optionsSuccessStatus: 200, // For legacy browser support
};

// Use the cors middleware
app.use(cors(corsOptions));

// API routes
app.use("/", indexRoutes);
app.use("/products", productsRoutes);
app.use("/request-a-quote", requestRoutes);
app.use("/", requestRoutes);
app.use("/contact", contactRoutes);
// app.use("/about", aboutRoutes);

app.all(/.*/, (req, res) => {
  res.status(404).json({
    error: "API endpoint not found",
    message: `${req.method} ${req.path} is not a valid endpoint`,
  });
});

const PORT = 4000;
app
  .listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use. Trying ${PORT + 1}...`);
      app.listen(PORT + 1, () => {
        console.log(`Server running on http://localhost:${PORT + 1}`);
      });
    } else {
      console.error("Server error:", err);
    }
  });
