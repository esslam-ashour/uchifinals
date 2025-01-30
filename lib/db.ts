import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL + 
        `&pool_timeout=10` +
        `&connection_limit=${process.env.NODE_ENV === 'production' ? 10 : 5}`
    },
  },
});

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;