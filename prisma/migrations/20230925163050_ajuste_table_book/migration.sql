/*
  Warnings:

  - You are about to drop the column `data_fim` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `genero` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `quantPage` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "data_fim",
DROP COLUMN "genero",
DROP COLUMN "quantPage",
ADD COLUMN     "avaliacao" TEXT,
ADD COLUMN     "data_final" TEXT,
ADD COLUMN     "status" TEXT;
