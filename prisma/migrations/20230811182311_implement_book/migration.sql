/*
  Warnings:

  - A unique constraint covering the columns `[titulo]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Book_titulo_key" ON "Book"("titulo");
