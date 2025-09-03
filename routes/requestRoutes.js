const { Router } = require("express");
const requestRouter = Router();
const requestController = require("../controllers/requestController");

// requestRouter.post("/", requestController);
requestRouter.post("/request-a-quote", requestController);

module.exports = requestRouter;
