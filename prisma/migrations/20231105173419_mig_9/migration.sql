/*
  Warnings:

  - You are about to drop the `SiteConfig` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SiteConfig";

-- CreateTable
CREATE TABLE "siteConfig" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "siteConfig_pkey" PRIMARY KEY ("id")
);
