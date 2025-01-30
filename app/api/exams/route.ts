import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(50, '60 s'),
});

export async function GET(request: Request) {
  const identifier = request.headers.get('x-real-ip') || 'anonymous';
  const { success } = await ratelimit.limit(identifier);
  if (!success) return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });

  const url = new URL(request.url);
  const details = url.searchParams.get('details');

  const page = Number(url.searchParams.get('page')) || 1;
  const pageSize = 50;
  const skip = (page - 1) * pageSize;

   try {
    const exams = await prisma.exam.findMany({
      skip,
      take: pageSize,
      where: {
        AND: [
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