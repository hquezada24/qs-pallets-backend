const productController = (req, res) => {
  res.json({
    status: "success",
    message: "Routes loaded successfully.",
    products: [
      {
        name: "Standard Pallets",
        price: 10,
        description:
          "Our new pallets are crafted from high-grade materials with precision manufacturing processes. Built to withstand heavy loads and repeated use, these pallets offer maximum durability and reliability for your shipping needs.",
        key_features: [
          "High load capacity",
          'Standard sizes: 48" x 40", 42" x 42", 48" x 48"',
          "Custom branding available",
        ],
      },
      {
        name: "Recycled Pallets",
        price: "5",
        description:
          "Our recycled pallets undergo rigorous inspection and refurbishment processes. Each pallet is carefully selected, repaired, and tested to ensure it meets our quality standards while providing an environmentally conscious solution.",
        key_features: [
          "Thoroughly inspected and graded",
          "Structural repairs using quality materials",
          "Load tested for safety assurance",
        ],
      },
      {
        name: "Custom Pallets",
        price: "Quote on request",
        description:
          "When standard sizes won't work, our custom pallet solutions are designed specifically for your unique requirements. From unusual dimensions to specialized materials, we create pallets that perfectly fit your products and processes.",
        key_features: [
          "Any size or dimension possible",
          "Custom branding available",
          "Load tested for safety assurance",
        ],
      },
    ],
    additionalServices: [
      {
        icon: "🔄",
        title: "Pallet Management",
        description:
          "Complete pallet lifecycle management including pickup, repair, and exchange programs to keep your operations running smoothly.",
      },
      {
        icon: "📊",
        title: "Inventory Solutions",
        description:
          "Strategic inventory management and just-in-time delivery programs designed to optimize your supply chain and reduce storage costs.",
      },
      {
        icon: "🌱",
        title: "Sustainability",
        description:
          "Eco-friendly disposal and recycling services that help reduce your environmental impact while recovering value from used pallets.",
      },
    ],
    specifications: {
      headers: [
        "Specification",
        "New Pallets",
        "Recycled Pallets",
        "Custom Pallets",
      ],
      rows: [
        {
          specification: "Standard Sizes",
          newPallets: '48"×40", 42"×42", 48"×48"',
          recycledPallets: "Various standard sizes",
          customPallets: "Any dimension",
        },
        {
          specification: "Lead Time",
          newPallets: "5-10 business days",
          recycledPallets: "Same day - 3 days",
          customPallets: "2-4 weeks",
        },
      ],
    },
  });
};

module.exports = productController;
