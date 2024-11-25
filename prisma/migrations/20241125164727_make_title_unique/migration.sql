/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `LifestyleArticle` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LifestyleArticle_title_key" ON "LifestyleArticle"("title");
