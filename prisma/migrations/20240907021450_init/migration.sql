/*
  Warnings:

  - Added the required column `room` to the `exams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "exams" ADD COLUMN     "room" TEXT NOT NULL,
ALTER COLUMN "course" SET DATA TYPE TEXT,
ALTER COLUMN "section" SET DATA TYPE TEXT,
ALTER COLUMN "sectionTitle" SET DATA TYPE TEXT,
ALTER COLUMN "instructor" SET DATA TYPE TEXT,
ALTER COLUMN "startTime" SET DATA TYPE TEXT,
ALTER COLUMN "endTime" SET DATA TYPE TEXT;
