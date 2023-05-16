// imports
import { component$ } from "@builder.io/qwik";

// components
import BotPageActions from "@/components/botpage/actions/actions";
import { VoteIcon } from "@/icons";
// header for @bot page
export default component$(() => {
  return (
    <div class="bg-black/40 md:bg-black/20 mx-8 rounded-lg my-2 py-3 md:py-10">
      <div class="gap-y-5 grid grid-cols-1 md:grid-cols-2">
        <div class="flex justify-center items-center">
          <img
            class="w-32 h-32 rounded-full shadow-lg"
            src="/favicon.svg"
            alt="Bot profile pic"
          />
        </div>
        <div class="cols-span-3 text-center md:text-left align-middle">
          <h1 class="text-5xl font-bold tracking-wide">Bot Name </h1>
          <p class="text-gray-400 text-lg">Short description</p>
          <BotPageActions />
        </div>
      </div>
    </div>
  );
});
