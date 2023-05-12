// imports
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import GradientText from "@/components/ui/gradient/text";

// 404 page
export default component$(() => {
  return (
    <>
      <div class="h-screen w-screen overflow-hidden flex items-center">
        <div class="mx-auto text-center">
          <h1 class="font-extrabold text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-600 tracking-widest">
            <GradientText text="404" />
          </h1>
          <a href="/">
            <p class="text-1xl text-white/80 font-semibold mt-3 hover:underline hover:scale-105">
              Page Not Found...
            </p>
          </a>
        </div>
      </div>
    </>
  );
});

// head
export const head: DocumentHead = {
  title: "Page 404",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
