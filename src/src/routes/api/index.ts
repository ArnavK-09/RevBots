// imports
import type { RequestHandler } from "@builder.io/qwik-city";

// GET /api
export const onGet: RequestHandler = async (e) => {
e.json(200, {
    Hello: "World",
  });
};
