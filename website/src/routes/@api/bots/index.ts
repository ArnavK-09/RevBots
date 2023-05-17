// imports
import type { RequestHandler } from "@builder.io/qwik-city";
import DB from "@/plugins/prisma";

// GET /api/bots
export const onGet: RequestHandler = async (e) => {
  const prisma = DB;
  const allBotsData = await prisma.bot.findMany();
  e.json(200, allBotsData);
};

// PUT /api/bots
export const onPut: RequestHandler = async (e) => {
  const prisma = DB;
  const allBotsData = await prisma.bot.findMany();
  e.json(200, allBotsData);
};
