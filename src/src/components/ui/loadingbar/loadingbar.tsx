// imports
import { component$ } from "@builder.io/qwik";

// loading bar for site
export default component$(() => {
  return (
    <div class="fixed top-0 w-full z-60">
      <div class="h-1 overflow-hidden">
        <div
          class="w-full h-1 bg-yellow-600 shadow-none"
          id="progressbar"
        ></div>
      </div>
    </div>
  );
});
