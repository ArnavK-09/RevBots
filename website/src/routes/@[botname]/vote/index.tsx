// imports
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// bot view page
export default component$(() => {
  return (
    <>
      <h1>Bot </h1>
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
