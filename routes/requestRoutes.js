const { Router } = require("express");
const requestRouter = Router();
const requestController = require("../controllers/requestController");

requestRouter.post("/", requestController);

module.exports = requestRouter;
