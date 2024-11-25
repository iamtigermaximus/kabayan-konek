/*
  Warnings:

  - Added the required column `date` to the `NewsArticle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newsSummary` to the `NewsArticle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `NewsArticle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NewsArticle" ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "newsSummary" TEXT NOT NULL,
ADD COLUMN     "source" TEXT NOT NULL;
