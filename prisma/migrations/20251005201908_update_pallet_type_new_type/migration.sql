/*
  Warnings:

  - The values [NEW] on the enum `PalletType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Messages` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."PalletType_new" AS ENUM ('STANDARD', 'RECYCLED', 'CUSTOM');
ALTER TABLE "public"."Quote" ALTER COLUMN "palletType" TYPE "public"."PalletType_new" USING ("palletType"::text::"public"."PalletType_new");
ALTER TYPE "public"."PalletType" RENAME TO "PalletType_old";
ALTER TYPE "public"."PalletType_new" RENAME TO "PalletType";
DROP TYPE "public"."PalletType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."Messages" DROP CONSTRAINT "Messages_authorId_fkey";

-- DropTable
DROP TABLE "public"."Messages";

-- CreateTable
CREATE TABLE "public"."Message" (
    "id" SERIAL NOT NULL,
    "messageId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "employee_email" TEXT NOT NULL,
    "status" "public"."Status" NOT NULL DEFAULT 'PENDING',
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Message_messageId_key" ON "public"."Message"("messageId");

-- AddForeignKey
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
