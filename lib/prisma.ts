import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}



export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  // Add this somewhere to test your database connection
  prisma.$connect()
  .then(() => console.log('Database connected successfully'))
  .catch((error) => console.error('Database connection failed:', error));
  global.prisma = prisma;
}
