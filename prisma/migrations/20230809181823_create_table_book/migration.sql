-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "quantPage" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "editora" TEXT NOT NULL,
    "anoPublicacao" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
