// imports
import type { RequestHandler } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";

// GET /api/bots/[id]
export const onGet: RequestHandler = async (e) => {
  /* Get single bot data */
  const prisma = new PrismaClient();
  const queryID = e.params.id;
  const selectedBot = await prisma.bot.findUnique({
    where: { OR: [{ username: queryID }, { identifier: queryID }] },
  });
  e.json(200, selectedBot);
};
