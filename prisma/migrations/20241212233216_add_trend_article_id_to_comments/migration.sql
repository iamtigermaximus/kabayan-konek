-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "trendArticleId" TEXT;

-- CreateTable
CREATE TABLE "TrendArticle" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TrendArticle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TrendArticle_title_key" ON "TrendArticle"("title");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_trendArticleId_fkey" FOREIGN KEY ("trendArticleId") REFERENCES "TrendArticle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrendArticle" ADD CONSTRAINT "TrendArticle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
