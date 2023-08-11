/*
  Warnings:

  - Changed the type of `anoPublicacao` on the `Book` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "anoPublicacao",
ADD COLUMN     "anoPublicacao" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "image" SET DATA TYPE TEXT;
