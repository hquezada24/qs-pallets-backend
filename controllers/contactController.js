const contactController = (req, res) => {
  res.json({
    status: "success",
    message: "Routes loaded successfully.",
    contact: {
      phone: "903-401-0536",
      email: "info@qspallets.com",
      address: "1415 FM 2216 Honey Grove, TX 75446",
    },
  });
};

module.exports = contactController;
