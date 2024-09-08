import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: Request ) {
  const url = new URL(request.url);
  const { course, instructor, room, date } = {
     course: url.searchParams.get('course'),
     instructor: url.searchParams.get('instructor'),
     room: url.searchParams.get('room'),
    date: url.searchParams.get('date') 
  };

  try {
    const exams = await prisma.exam.findMany({
      where: {
        AND: [
          course ? { course: { contains: course as string, mode: 'insensitive' } } : {},
          instructor ? { instructor: { contains: instructor as string, mode: 'insensitive' } } : {},
          room ? { room: { contains: room as string, mode: 'insensitive' } } : {},
          date ? { date: new Date(date as string) } : {},
        ]
      }
    });
    return NextResponse.json(exams);
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while fetching exams' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}