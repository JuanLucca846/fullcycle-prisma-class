-- CreateEnum
CREATE TYPE "trailStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "trails" ADD COLUMN     "status" "trailStatus" NOT NULL DEFAULT 'ACTIVE';
