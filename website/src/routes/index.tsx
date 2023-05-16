// imports
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// components
import HeroSearch from "@/components/home/hero/hero";
import BotList from "@/components/home/botslist/botslist";

// home page
export default component$(() => {
  return (
    <>
      <HeroSearch />
      <BotList />
    </>
  );
});

// head
export const head: DocumentHead = {
  title: "Explore Revolt Bots",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
