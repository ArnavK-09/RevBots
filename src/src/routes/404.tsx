// imports
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// 404 page
export default component$(() => {
  return (
    <>
      <h1>404</h1>
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
