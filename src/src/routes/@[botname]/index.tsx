// imports
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";

// get bot details
export const useGetBotDetails = routeLoader$(async ({ params, status }) => {
  const botUsername = parseInt(params["botname"], 10);
  const prisma = new PrismaClient();
  const bot = await prisma.bot.findUnique({ where: { username: userId } });
  if (!user) {
    status(404);
  }
  return bot;
});

// bot view page
export default component$(() => {
  const bot = useGetBotDetails();

  return (
    <>
      <h1>Bot {bot.value} </h1>
    </>
  );
});

// head
export const head: DocumentHead = {
  title: `Bot`,
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
