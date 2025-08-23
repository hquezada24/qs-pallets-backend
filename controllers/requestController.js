const requestController = (req, res) => {
  res.json({
    status: "success",
    message:
      "Your quote request has been submitted successfully. We will contact you shortly.",
    data: {
      requestId: "q-1A2B3C4D5E",
    },
  });
};

module.exports = requestController;
