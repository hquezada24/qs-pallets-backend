const express = require("express");
const app = express();
const indexRoutes = require("./routes/indexRoutes");
const productsRoutes = require("./routes/productRoutes");
const requestRoutes = require("./routes/requestRoutes");
const contactRoutes = require("./routes/contactRoutes");
// const aboutRoutes = require("./routes/aboutRoutes");

// Parse JSON for API requests
app.use(express.json());

// API routes
app.use("/", indexRoutes);
app.use("/products", productsRoutes);
app.use("/request-a-quote", requestRoutes);
app.use("/contact", contactRoutes);
// app.use("/about", aboutRoutes);

app.all(/.*/, (req, res) => {
  res.status(404).json({
    error: "API endpoint not found",
    message: `${req.method} ${req.path} is not a valid endpoint`,
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
