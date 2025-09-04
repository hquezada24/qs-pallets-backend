const indexController = (req, res) => {
  res.json({
    status: "success",
    message: "Routes loaded successfully.",
    features: {
      title: "Our Product Range",
      description:
        "From standard shipping pallets to custom solutions, we have the right pallet for every application and budget.",
      products: [
        {
          icon: "🆕",
          name: "Standard Pallets",
          description:
            "Premium quality pallets built from high-grade materials. Perfect for applications requiring maximum durability and consistency.",
        },
        {
          icon: "♻️",
          name: "Recycled Pallets",
          description:
            "Cost-effective and environmentally responsible. Our recycled pallets are thoroughly inspected and refurbished to meet quality standards.",
        },
        {
          icon: "🔧",
          name: "Custom Pallets",
          description:
            "Specialized solutions for unique requirements. Any size, any specification - we'll create the perfect pallet for your needs.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose QS Pallets?",
      description:
        "We're not just another pallet supplier. We're your logistics partner, committed to providing solutions that keep your business moving forward.",
      features: [
        {
          icon: "⚡",
          title: "Custom Solutions",
          description:
            "Standard sizes not working? We create custom pallets tailored to your exact specifications, no matter how unique your requirements.",
        },
        {
          icon: "🔧",
          title: "Competitive Pricing",
          description:
            "Get the best value for your investment. Our efficient operations allow us to offer competitive prices without sacrificing quality.",
        },
        {
          icon: "💰",
          title: "Trusted Partnership",
          description:
            "We build lasting relationships with our clients. Count on us for reliable service, clear communication, and expert support.",
        },
      ],
    },
  });
};

module.exports = indexController;
