// imports
import type { RequestHandler } from "@builder.io/qwik-city";
import { Tag as TagList } from "@/plugins/prisma";

// GET /api/tags
export const onGet: RequestHandler = async (e) => {
  /* All bot tags */
  e.json(200, TagList);
};
