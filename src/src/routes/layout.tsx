// imports
import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

// components
import Navbar from "../components/layout/navbar/navbar";

// loader
export const useGetSearchedBot = routeLoader$(async ({ params,status }: any) => {
  const data = params.query;

  if (!data) {
   status(404);
  }
  return data;
});


// layout
export default component$(() => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main class="pt-20">
        <Slot />
      </main>
      <footer />
    </>
  );
});
