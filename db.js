const crypto = require("crypto");
const { PrismaClient } = require("./generated/prisma");

const prisma = new PrismaClient();

// Helper function to find or create customer
async function findOrCreateCustomer(customerData, tx = prisma) {
  console.log("Received request body:", JSON.stringify(req.body, null, 2));

  console.log(customerData);
  try {
    // Check for existing customer by email
    let customer = await tx.customer.findUnique({
      where: { email: customerData.email },
    });

    if (!customer) {
      // Create new customer
      customer = await tx.customer.create({
        data: {
          fullName: customerData.fullName,
          companyName: customerData.companyName,
          email: customerData.email,
          phone: customerData.phone,
        },
      });
    } else {
      // Update customer info if data has changed
      const needsUpdate =
        customer.fullName !== customerData.fullName ||
        customer.companyName !== customerData.companyName ||
        customer.phone !== customerData.phone;

      if (needsUpdate) {
        customer = await tx.customer.update({
          where: { id: customer.id },
          data: {
            fullName: customerData.fullName,
            companyName: customerData.companyName,
            phone: customerData.phone,
          },
        });
      }
    }

    return customer;
  } catch (error) {
    throw new Error(`Failed to find or create customer: ${error.message}`);
  }
}

// Helper function to find or create address
async function findOrCreateAddress(addressData, tx = prisma) {
  try {
    // Check for existing address by all fields
    let address = await tx.address.findFirst({
      where: {
        street: addressData.street,
        city: addressData.city,
        state: addressData.state,
        zipCode: addressData.zipCode,
      },
    });

    if (!address) {
      // Create new address
      address = await tx.address.create({
        data: {
          street: addressData.street,
          city: addressData.city,
          state: addressData.state,
          zipCode: addressData.zipCode,
        },
      });
    }

    return address;
  } catch (error) {
    throw new Error(`Failed to find or create address: ${error.message}`);
  }
}

// Helper function to create the quote
async function createQuote(quoteData, customerId, addressId, tx = prisma) {
  try {
    const quote = await tx.quote.create({
      data: {
        palletType: quoteData.palletType,
        quantity: parseInt(quoteData.quantity, 10),
        additionalDetails: quoteData.additionalDetails,
        requestId: crypto.randomUUID(),
        customerId: customerId,
        addressId: addressId,
      },
      include: {
        customer: true,
        address: true,
      },
    });

    return quote;
  } catch (error) {
    throw new Error(`Failed to create quote: ${error.message}`);
  }
}

// Main orchestrator function using transaction
async function createQuoteWithDependencies(quoteData) {
  try {
    return await prisma.$transaction(async (tx) => {
      // Step 1: Handle customer
      const customer = await findOrCreateCustomer(quoteData, tx);

      // Step 2: Handle address
      const address = await findOrCreateAddress(quoteData.address, tx);

      // Step 3: Create quote
      const quote = await createQuote(quoteData, customer.id, address.id, tx);

      return quote;
    });
  } catch (error) {
    console.error("Failed to create quote with dependencies:", error);
    throw error;
  }
}

// Individual functions for specific use cases
async function findExistingCustomer(email) {
  try {
    return await prisma.customer.findUnique({
      where: { email },
      include: { quotes: true },
    });
  } catch (error) {
    throw new Error(`Failed to find customer: ${error.message}`);
  }
}

async function findExistingAddress(addressData) {
  try {
    return await prisma.address.findFirst({
      where: {
        street: addressData.street,
        city: addressData.city,
        state: addressData.state,
        zipCode: addressData.zipCode,
      },
      include: { quotes: true },
    });
  } catch (error) {
    throw new Error(`Failed to find address: ${error.message}`);
  }
}

// Validation helper
function validateQuoteData(quoteData) {
  const errors = [];

  if (!quoteData.palletType) errors.push("Pallet type is required");
  if (!quoteData.quantity || quoteData.quantity <= 0)
    errors.push("Valid quantity is required");
  if (!quoteData.email) errors.push("Customer email is required");
  if (!quoteData.fullName) errors.push("Customer name is required");
  if (!quoteData.address?.street) errors.push("Address street is required");
  if (!quoteData.address?.city) errors.push("Address city is required");

  if (errors.length > 0) {
    throw new Error(`Validation failed: ${errors.join(", ")}`);
  }
}

// Main function with validation
async function createQuoteWithValidation(quoteData) {
  try {
    // Validate input first
    validateQuoteData(quoteData);

    // Create quote with dependencies
    return await createQuoteWithDependencies(quoteData);
  } catch (error) {
    console.error("Quote creation failed:", error);
    throw error;
  }
}

module.exports = {
  createQuoteWithDependencies,
  findOrCreateCustomer,
  findOrCreateAddress,
  createQuote,
  findExistingCustomer,
  findExistingAddress,
  validateQuoteData,
  createQuoteWithValidation,
};
