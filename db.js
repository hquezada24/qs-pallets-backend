const { PrismaClient } = require("./generated/prisma");
const crypto = require("crypto");

const prisma = new PrismaClient();

async function createQuoteWithDependencies(quoteData) {
  try {
    const uuid = crypto.uuid();
    const newQuote = await prisma.quote.create({
      data: {
        // Quote fields
        palletType: quoteData.palletType,
        quantity: quoteData.quantity,
        additionalDetails: quoteData.additionalDetails,
        requestId: uuid,

        // Nested create for the Customer
        customer: {
          create: {
            fullName: quoteData.fullName,
            companyName: quoteData.companyName,
            email: quoteData.email,
            phone: quoteData.phone,
          },
        },

        // Nested create for the Address
        address: {
          create: {
            street: quoteData.street,
            city: quoteData.city,
            state: quoteData.state,
            zipCode: quoteData.zipCode,
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
