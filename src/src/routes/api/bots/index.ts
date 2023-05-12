// imports
import type { RequestHandler } from "@builder.io/qwik-city";
import { PrismaClient } from '@prisma/client';


// GET /api/botd
export const onGet: RequestHandler = async (e) => {
  const prisma = new PrismaClient();
    
  const users = await prisma.user.findMany();
  e.json(200, users);
};
