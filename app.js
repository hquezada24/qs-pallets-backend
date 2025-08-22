const express = require("express");
const app = require("app");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", routes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
