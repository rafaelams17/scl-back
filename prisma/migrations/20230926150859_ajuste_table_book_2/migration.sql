/*
  Warnings:

  - You are about to drop the column `avaliacao` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "avaliacao",
ADD COLUMN     "quant_page" INTEGER,
ADD COLUMN     "tipo" TEXT;
