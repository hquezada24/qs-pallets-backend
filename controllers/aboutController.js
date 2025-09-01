const aboutController = (req, res) => {
  res.json({
    status: "success",
    message: "Routes loaded successfully.",
    about: [
      {
        heading: "Our Mission",
        text: "At QS Pallets, we're more than just a pallet supplier; we're a partner in your business's supply chain. Our mission is to provide high-quality, reliable pallet solutions that help our clients ship their products safely and efficiently. We're committed to delivering exceptional products and service, ensuring your logistics run smoothly from start to finish.",
      },
      {
        heading: "Our Story",
        text: "Hugo Quezada founded QS Pallets in 2019 with a simple goal: to offer better-quality pallets with a customer-first approach. We saw a need in the market for a supplier who was not only knowledgeable but also dedicated to building long-term relationships.",
      },
      {
        heading: "Our Products",
        text: "We understand that every business has unique needs. That's why we offer a comprehensive range of pallet options to meet any requirement.",
        content: [
          {
            subheading: "New Pallets",
            text: "Durable, custom-built pallets tailored to your exact specifications.",
          },
          {
            subheading: "Recycled Pallets",
            text: "A cost-effective and environmentally friendly option that helps reduce your carbon footprint.",
          },
          {
            subheading: "Custom Pallets",
            text: "Specialized solutions for unique products or challenging shipping requirements.",
          },
        ],
      },
      {
        heading: "Why Choose Us?",
        content: [
          {
            subheading: "Quality You Can Trust",
            text: "Our pallets are built to last. We use high-grade materials and rigorous quality control to ensure they can handle any load.",
          },
          {
            subheading: "Commitment to Service",
            text: "We pride ourselves on fast turnaround times, competitive pricing, and clear communication. Your business is our priority, and we go the extra mile to earn your trust.",
          },
        ],
      },
    ],
  });
};

module.exports = aboutController;
