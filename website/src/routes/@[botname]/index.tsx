// imports
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";/*
import { routeLoader$ } from "@builder.io/qwik-city";
import DB from "@/plugins/prisma";
*/
// components
import BotpageHeader from "@/components/botpage/header/header";
import BotpageDescription from "@/components/botpage/description/description";
import HeroSearch from "@/components/home/hero/hero";
/*
// load bot data
export const useBotData = routeLoader$(async ({ params, fail }) => {
  // init
  const prisma = DB;

  // fetch
  try {
    const botFetched = await prisma.bot.findUnique({
      where: {
        username: params.botname,
      },
    });

    if (botFetched == null) {
      return fail(404, { message: "Bot not found" });
    }
    return botFetched;
  } catch (e) {
    return fail(500, { message: "Unexpected Error Occurred" });
  }
});*/

// bot view page
export default component$(() => {
  // get bot
  //const bot = useBotData();
  return (
    <>
      <section class="my-5">
        <HeroSearch />
        <BotpageHeader />
        {/*// JSON.stringify(bot.value)/*/}
        <BotpageDescription markdown="## hello _hi_" />
      </section>
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
