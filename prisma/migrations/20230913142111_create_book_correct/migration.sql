/*
  Warnings:

  - You are about to drop the column `id_user` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `leitura_atual` on the `Book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_id_user_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "id_user",
DROP COLUMN "leitura_atual",
ALTER COLUMN "autor" DROP NOT NULL,
ALTER COLUMN "quantPage" DROP NOT NULL,
ALTER COLUMN "genero" DROP NOT NULL,
ALTER COLUMN "data_inicial" DROP NOT NULL,
ALTER COLUMN "data_fim" DROP NOT NULL;
