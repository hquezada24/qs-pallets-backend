const express = require("express");
const app = express();
const path = require("node:path");
const indexRoutes = require("./routes/indexRoutes");
const requestRoutes = require("./routes/requestRoutes");
// const contactRoutes = require("./routes/contactRoutes");
// const aboutRoutes = require("./routes/aboutRoutes");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRoutes);
app.use("/request-a-quote", requestRoutes);
// app.use("/contact", contactRoutes);
// app.use("/about", aboutRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
