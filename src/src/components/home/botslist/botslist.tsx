// imports
import { component$ } from "@builder.io/qwik";

// components
import BotFilters from "@/components/explore/filters/filters";
import ExploreBots from "@/components/explore/bots/bots";

// section of bot explore
export default component$(() => {
  return (
    <section>
      <BotFilters />
      <ExploreBots />
    </section>
  );
});
