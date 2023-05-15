// imports
import type { RequestHandler } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";

// GET /api/bots
export const onGet: RequestHandler = async (e) => {
  const prisma = new PrismaClient();
  const allBotsData = await prisma.bot.findMany();
  e.json(200, allBotsData);
};

// PUT /api/botd
export const onPut: RequestHandler = async (e) => {
  const prisma = new PrismaClient();
  const allBotsData = await prisma.bot.findMany();
  e.json(200, allBotsData);
};
