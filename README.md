# QS Pallets Backend

This repository contains the backend API for the **QS Pallets** website.  
It is built with **Express.js** and **Prisma ORM**, using **PostgreSQL** as the database, and handles **quote requests**, **contact messages**, and provides product/homepage data for the frontend.

## Features

- RESTful API endpoints for:
  - Submitting quote requests
  - Submitting contact form messages
  - Providing data for the home and products pages
- Data validation and basic error handling
- Database integration via Prisma
- Easy integration with the QS Pallets React frontend

## Tech Stack

- Backend: Node.js, Express.js
- Database ORM: Prisma
- Database: PostgreSQL
- Environment management: dotenv (for environment variables)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hquezada24/qs-pallets-backend.git
   cd qs-pallets-backend
   ```

1. Install dependencies:

   ```bash
   npm install
   ```

1. Start the development server:

   ```bash
   npm run start
   ```

1. Open in your browser: [http://localhost:3000](http://localhost:3000)

## Contact

Created by [Hugo Quezada](https://www.linkedin.com/in/hugo-quezada-7059091b6/)
