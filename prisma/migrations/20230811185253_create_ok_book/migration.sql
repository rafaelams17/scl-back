/*
  Warnings:

  - Changed the type of `quantPage` on the `Book` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `image` on the `Book` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "quantPage",
ADD COLUMN     "quantPage" INTEGER NOT NULL,
DROP COLUMN "image",
ADD COLUMN     "image" TIMESTAMP(3) NOT NULL;
