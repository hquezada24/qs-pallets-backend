const indexController = (req, res) => {
  res.json({
    status: "success",
    message: "Routes loaded successfully.",
    header: {
      logo_url: "",
      nav_links: [
        { text: "Products", url: "/products" },
        { text: "Request a Quote", url: "/request-a-quote" },
        { text: "Contact", url: "/contact" },
        { text: "About Us", url: "/about" },
      ],
    },
    hero: {
      headline: "High-Quality Pallets for All Your Shipping Needs",
      sub_headline:
        "We provide new and recycled pallets in standard and custom sizes.",
      image_url: "",
      cta_text: "Request a Quote",
      cta_url: "/request-a-quote",
    },
    featured_products: [
      {
        name: "Standard Wood Pallet",
        short_description:
          "Our most popular new pallet, perfect for general shipping.",
        image_url: "",
        product_url: "",
      },
      {
        name: "Recycled Heat-Treated Pallet",
        short_description:
          "Eco-friendly and ISPM 15 certified for international shipping.",
        image_url: "",
        product_url: "",
      },
    ],
    services: [
      {
        title: "New Pallet Sales",
        description: "Durable and reliable pallets for any industry.",
        icon_url: "",
      },
      {
        title: "Custom Solutions",
        description: "Pallets built to your exact specifications.",
        icon_url: "",
      },
    ],
    contact: {
      phone: "903-401-0536",
      email: "info@qspallets.com",
      address: "1415 FM 2216 Honey Grove, TX 75446",
    },
  });
};

module.exports = indexController;
