/*
  Warnings:

  - Added the required column `employee_email` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `messages` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."status" AS ENUM ('pending', 'sent');

-- AlterTable
ALTER TABLE "public"."messages" ADD COLUMN     "employee_email" TEXT NOT NULL,
ADD COLUMN     "status" "public"."status" NOT NULL;
