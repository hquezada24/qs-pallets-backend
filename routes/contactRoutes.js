const { Router } = require("express");
const contactRouter = Router();
const {
  getContact,
  postContact,
} = require("../controllers/contactControllers.js");

contactRouter.get("/contact", getContact);
contactRouter.post("/contact", postContact);

module.exports = contactRouter;
