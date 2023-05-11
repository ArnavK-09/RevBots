// imports
import { component$ } from "@builder.io/qwik";

// components
import BotCard from "@/components/cards/bot/bot";

// Section to show bots of corresponding category
export default component$(() => {
  return (
    <section class="my-5 px-5">
      <div>
        <h2 class="font-medium text-3xl">Bot Category</h2>
        <p class="text-gray-400/80 text-sm">Subtitle Text </p>
      </div>
      <div class="pt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <BotCard />
        <BotCard />
      </div>
    </section>
  );
});
