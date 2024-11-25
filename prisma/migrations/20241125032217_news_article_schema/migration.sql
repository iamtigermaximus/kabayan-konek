/*
  Warnings:

  - Changed the type of `date` on the `NewsArticle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "NewsArticle" DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
