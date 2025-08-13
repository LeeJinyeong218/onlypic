import type { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export {}; // 모듈 방지