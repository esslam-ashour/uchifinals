-- CreateTable
CREATE TABLE "exams" (
    "id" TEXT NOT NULL,
    "course" VARCHAR(255) NOT NULL,
    "section" VARCHAR(5) NOT NULL,
    "sectionTitle" VARCHAR(255) NOT NULL,
    "instructor" VARCHAR(255) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "room" VARCHAR(255) NOT NULL,

    CONSTRAINT "exams_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "exams_course_section_idx" ON "exams"("course", "section");
