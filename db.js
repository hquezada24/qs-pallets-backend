const crypto = require("crypto");
const { PrismaClient } = require("./generated/prisma");

const prisma = new PrismaClient();

async function createQuoteWithDependencies(quoteData) {
  try {
    const newQuote = await prisma.quote.create({
      data: {
        // Quote fields
        palletType: quoteData.palletType,
        quantity: quoteData.quantity,
        additionalDetails: quoteData.additionalDetails,
        requestId: crypto.randomUUID(),

        // Nested create for the Customer
        customer: {
          create: {
            fullName: quoteData.customer.fullName,
            companyName: quoteData.customer.companyName,
            email: quoteData.customer.email,
            phone: quoteData.customer.phone,
          },
        },

        // Nested create for the Address
        address: {
          create: {
            street: quoteData.address.street,
            city: quoteData.address.city,
            state: quoteData.address.state,
            zipCode: quoteData.address.zipCode,
          },
        },
      },
      // Include the related data in the response
      include: {
        customer: true,
        address: true,
      },
    });

    return newQuote;
  } catch (error) {
    console.error("Failed to create quote with dependencies:", error);
    throw error;
  }
}

module.exports = createQuoteWithDependencies;
