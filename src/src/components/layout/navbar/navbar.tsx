// imports
import { component$ } from "@builder.io/qwik";

// navbar
export default component$(() => {
  return (
    <>
      <nav class="flex backdrop-blur-sm justify-between fixed p-4 h-16 w-full items-center top-0 bg-transparent z-50 shadow-sm">
        <div class="flex h-full">
          <a href="/">
            <img alt="Logo" src="/favicon.svg" class="h-9 w-9" />
          </a>
        </div>
        <div class="gap-x-7 text-right flex text-gray-300 overflow-x-scroll">
          <button>go To Profile</button>
          <button>Menu</button>
        </div>
      </nav>
    </>
  );
});
