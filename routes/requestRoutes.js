const { Router } = require("express");
const requestRouter = Router();
const requestController = require("../controllers/requestController");

requestRouter.get("/", requestController);

module.exports = requestRouter;
