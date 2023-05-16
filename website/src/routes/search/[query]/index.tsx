// imports
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useGetSearchedBot } from "@/routes/layout";
// search results page
export default component$(() => {
  // get results
  const result = useGetSearchedBot();

  return (
    <>
      <h1>Search {result.value ?? "none"}</h1>
    </>
  );
});

// head
export const head: DocumentHead = {
  title: `Search Results for "todo"`,
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
