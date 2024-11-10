-- CreateEnum
CREATE TYPE "WeightType" AS ENUM ('PERCENTAGE', 'ABSOLUTE', 'REMAINING');

-- CreateEnum
CREATE TYPE "PortfolioCategory" AS ENUM ('EMERGENCY_FUND', 'SPECIFIC_GOAL', 'LONG_TERM', 'PENSION_SAVINGS');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('ILS', 'USD', 'EUR');

-- CreateEnum
CREATE TYPE "AssetHolderType" AS ENUM ('BANK', 'BROKER', 'INVESTMENT_HOUSE', 'REAL_ESTATE', 'OTHER');

-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('CASH', 'BOND', 'STOCK', 'DEPOSIT', 'ETF', 'ESPP', 'RSU', 'PENSION_FUND', 'STUDY_FUND', 'PROVIDENT_FUND', 'APARTMENT', 'LOAN');

-- CreateTable
CREATE TABLE "AssetHolder" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "AssetHolderType" NOT NULL,
    "stats" JSONB NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT,

    CONSTRAINT "AssetHolder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "AssetType" NOT NULL,
    "currency" "Currency" NOT NULL,
    "securityId" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "profit" DOUBLE PRECISION NOT NULL,
    "expenseRatio" DOUBLE PRECISION NOT NULL,
    "stats" JSONB NOT NULL,
    "assetHolderId" INTEGER NOT NULL,
    "isTaxable" BOOLEAN NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" "PortfolioCategory" NOT NULL,
    "timeline" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetPortfolio" (
    "id" SERIAL NOT NULL,
    "portfolioId" INTEGER NOT NULL,
    "assetId" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "weightType" "WeightType" NOT NULL,

    CONSTRAINT "AssetPortfolio_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_assetHolderId_fkey" FOREIGN KEY ("assetHolderId") REFERENCES "AssetHolder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetPortfolio" ADD CONSTRAINT "AssetPortfolio_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetPortfolio" ADD CONSTRAINT "AssetPortfolio_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
