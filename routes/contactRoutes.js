const { Router } = require("express");
const contactRouter = Router();
const contactController = require("../controllers/contactController");

contactRouter.get("/", contactController);

module.exports = contactRouter;
