const createQuoteWithValidation = require("../db");

const requestController = async (req, res) => {
  try {
    const quote = await createQuoteWithValidation(req.body);

    if (!quote) {
      res.status(400).json({
        status: "failed",
        message: "Your quote could not be stored correctly",
      });
    }
    res.json({
      status: "success",
      message:
        "Your quote request has been submitted successfully. We will contact you shortly.",
      data: {
        requestId: quote.requestId,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

module.exports = requestController;
