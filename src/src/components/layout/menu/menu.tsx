// imports
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

// components
import GradientText from "@/components/ui/gradient/text";

// mobile menu drawer
export default component$(() => {
  return (
    <>
      <div
        class="fixed bottom-5 h-1/3 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-black/70 backdrop-blur-sm rounded-lg border-2 border-red-900 transform-none"
        tabindex="-1"
      >
        <h5 class="inline-flex items-center mb-4 text-lg font-semibold">
          <GradientText text="Mobile Navigation" />
        </h5>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center "
        >
          X
        </button>

        <div>
          <ul class="text-center text-white/70 w-full h-full">
            <li>
              <Link
                href="/search/idk"
                class="w-20 rounded-lg shadow-md hover:bg-white/20"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
});
