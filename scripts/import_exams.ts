require('dotenv').config();

const { PrismaClient } = require('@prisma/client');
const XLSX = require('xlsx');
const fs = require('fs');
const moment = require('moment');

const prisma = new PrismaClient();

const FILE_PATH = 'spring_2024.xlsx';

async function importExams(FILE_PATH: string) {
  const workbook = XLSX.readFile(FILE_PATH);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);

  const exams = data.map((item: any) => ({
    course: item['Course'].trim(),
    section: item['Section'].toString().trim(),
    sectionTitle: item['Section Title'].trim(),
    instructor: item['Instructor'] ? item['Instructor'] : '',
    startTime: item['Start Time'].toString().trim(),
    endTime: item['End Time'].toString().trim(),
    date: new Date(item['Date of Exam']),
    room: item['Room'].toString().trim(),
}));

  await prisma.exam.createMany({
    data: exams,
  });
  console.log('Exams imported successfully');
}

importExams(FILE_PATH)
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });