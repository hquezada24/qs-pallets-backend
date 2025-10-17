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

const allowedOrigins = [
  "https://qspallets.netlify.app",
  "http://localhost:5173",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

// Use the cors middleware
app.use(cors(corsOptions));

// API routes
app.use("/", indexRoutes);
app.use("/products", productsRoutes);
app.use("/", requestRoutes);
app.use("/", contactRoutes);

app.all(/.*/, (req, res) => {
  res.status(404).json({
    error: "API endpoint not found",
    message: `${req.method} ${req.path} is not a valid endpoint`,
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
