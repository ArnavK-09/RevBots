// imports
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

// Card for bot
export default component$(() => {
  return (
    <div class="overflow-hidden bg-red-600/5 backdrop-blur-sm flex items-start justify-between rounded-xl border-2 border-red-700 p-4 shadow-sm sm:p-4 lg:p-8">
      <div class="pt-4 text-gray-500">
        <div class="flex gap-x-3">
          {" "}
          <div>
            {" "}
            <img
              src="/favicon.svg"
              class="h-16 w-16 sm:h-10 sm:w-10 rounded-full"
            />
          </div>
          <div>
            <h3 class="text-2xl font-medium text-red-700">Bot Name</h3>
            <p class="text-sm font-bold text-gray-400">71637, 4837</p>
          </div>
        </div>

        <p class="mx-1 w-full mt-2 text-sm sm:block">
          You can now manage phone, email and chat conversations all from a
          single mailbox.
        </p>

        <div class="gap-x-1 text-center mt-4 grid grid-cols-5">
          <Link
            href="/"
            class="hover:scale-105 hover:z-20 hover:shadow-lg col-span-2 backdrop-blur-md bg-red-200/10 py-3 text-white/70 rounded-lg"
          >
            Invite
          </Link>
          <Link
            href="/search"
            class="hover:scale-105 hover:z-20 hover:shadow-lg col-span-2 backdrop-blur-md bg-red-200/10 py-3 text-white/70 rounded-lg"
          >
            Vote
          </Link>
          <button class="hover:scale-105 hover:z-20 hover:shadow-lg  backdrop-blur-md bg-red-200/10 py-3 text-white/70 rounded-lg">
            ♻️
          </button>
        </div>
      </div>
      <div>
        <span class="rounded-lg absolute z-20 top-0 right-0 m-1.5 min-w-[15%] md:w-auto border-2 text-center border-red-700 bg-red-700/10 px-2 py-1.5 text-xs font-thick text-red-700">
          ↑ 537
        </span>
      </div>
    </div>
  );
});
