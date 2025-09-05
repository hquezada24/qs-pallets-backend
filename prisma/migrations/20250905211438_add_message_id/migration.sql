/*
  Warnings:

  - A unique constraint covering the columns `[messageId]` on the table `Messages` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `messageId` to the `Messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Messages" ADD COLUMN     "messageId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Messages_messageId_key" ON "public"."Messages"("messageId");
