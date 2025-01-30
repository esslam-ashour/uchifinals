import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const details = url.searchParams.get('details');
  const page = Number(url.searchParams.get('page')) || 1;
  const pageSize = 50;
  const skip = (page - 1) * pageSize;

  try {
    const exams = await prisma.exam.findMany({
      skip,
      take: pageSize,
      where: details ? {
        OR: [
          { course: { contains: details } },
          { room: { contains: details } },
          { instructor: { contains: details } },
          { sectionTitle: { contains: details } }
        ]
      } : {}
    });
    
    return NextResponse.json(exams);
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while fetching exams' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}