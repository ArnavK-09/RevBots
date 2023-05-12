// imports
import type { RequestHandler } from "@builder.io/qwik-city";

// GET /api/bots
export const onGet: RequestHandler = async (e) => {
  e.text(200, "Hello World");
};
