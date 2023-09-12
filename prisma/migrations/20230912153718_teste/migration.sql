-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_id_user_fkey";

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "id_user" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
