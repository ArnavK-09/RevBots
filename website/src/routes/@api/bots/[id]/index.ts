// imports
import type { RequestHandler } from "@builder.io/qwik-city";
import DB from "@/plugins/prisma";

// GET /api/bots/[id]
export const onGet: RequestHandler = async (e) => {
  /* Get single bot data */
  const prisma = DB;
  const queryID = e.params.id;
  const selectedBot = await prisma.bot.findUnique({
    // where: { OR: [{ username: queryID }, { identifier: queryID }] },
    where: {
      identifier: queryID,
    },
  });
  e.json(200, selectedBot);
};
