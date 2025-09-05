const { createMessageWithValidation } = require("../db.js");

const getContact = (req, res) => {
  res.json({
    status: "success",
    message: "Routes loaded successfully.",
    contactInfo: {
      address: {
        street: "1415 FM 2216",
        city: "Honey Grove",
        state: "TX",
        zipCode: "75446",
        formatted: "1415 FM 2216\nHoney Grove, TX 75446",
      },
      phone: {
        display: "(903) 401-0536",
        href: "+19034010536",
      },
      email: {
        display: "info@qspallets.com",
        href: "mailto:info@qspallets.com",
      },
      businessHours: {
        weekdays: "Monday - Friday: 7:00 AM - 6:00 PM",
        saturday: "Saturday: 8:00 AM - 4:00 PM",
        sunday: "Sunday: Closed",
      },
    },
  });
};

const postContact = async (req, res) => {
  try {
    const message = await createMessageWithValidation(req.body);
    if (!message) {
      return res.status(400).json({
        status: "failed",
        message: "Your message could not be stored correctly",
      });
    }

    res.json({
      status: "success",
      message:
        "Your message request has been submitted successfully. We will contact you shortly.",
      data: {
        messageId: message.messageId,
      },
    });
  } catch (error) {
    console.error("Message creation error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

module.exports = { getContact, postContact };
