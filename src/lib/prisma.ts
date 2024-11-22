import { PrismaClient } from '@prisma/client';

declare const global: {
  prisma: PrismaClient | undefined;
};

const config = {
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
};

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(config);
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient(config);
  }
  prisma = global.prisma;
}

export default prisma;
