// imports
import { component$ } from "@builder.io/qwik";
import { MenuIcon, ProfileIcon } from "@/icons";
import { Link } from "@builder.io/qwik-city";

// navbar
export default component$(() => {
  return (
    <>
      <nav class="flex justify-between fixed px-4 h-16 w-full items-center top-0 bg-transparent z-50 shadow-sm">
        <div class="flex h-full">
          <a href="/">
            <img
              alt="Logo"
              src="/favicon.svg"
              class="h-16 w-16 brightness-0 invert"
            />
          </a>
        </div>
        <div class="text-right flex gap-x-4 overflow-x-scroll">
          <Link
            href="/auth"
            class="fill-none w-8 h-8 rounded-full p-px hover:bg-white/20 stroke-white"
          >
            <ProfileIcon />
          </Link>
          <button type="button" class="fill-white w-8 h-8 stroke-white">
            <MenuIcon />
          </button>
        </div>
      </nav>
    </>
  );
});
