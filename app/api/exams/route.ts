import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const details = url.searchParams.get('details');
  const date = url.searchParams.get('date');

  try {
    const exams = await prisma.exam.findMany({
      where: {
        AND: [
          date ? { date: new Date(date) } : {},
          details ? {
            OR: [
              { course: { contains: details, mode: 'insensitive' } },
              { room: { contains: details, mode: 'insensitive' } },
              { instructor: { contains: details, mode: 'insensitive' } },
              { sectionTitle: { contains: details, mode: 'insensitive' } },
            ]
          } : {},
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