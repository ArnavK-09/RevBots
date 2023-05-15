// imports
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

// props
interface Props {
  name: string;
  id: string;
  votes?: number;
  description?: string;
}

// components
import { VoteIcon } from "@/icons";

// Card for bot
export default component$(({ name, id, description, votes }: Props) => {
  return (
    <div class="overflow-hidden relative bg-red-600/5 flex rounded-xl border-2 border-red-700 p-4 shadow-sm sm:p-4 lg:p-8">
      <div class="pt-4 text-gray-500 w-full">
        <div class="flex gap-x-3">
          <div>
            <img
              src="/favicon.svg"
              class="h-16 w-16 sm:h-10 sm:w-10 rounded-full"
            />
          </div>
          <div>
            <Link class="select-none" href={`/@${id}`}>
              <h3 class="text-2xl capitalize font-medium text-red-700">
                {name}
              </h3>
              <p class="text-sm font-bold text-gray-400">71637, 4837</p>
            </Link>
          </div>
        </div>

        <p class="mx-1 mt-4 text-sm sm:block">
          {description ?? "No Description available..."}
        </p>

        <div class="gap-x-1 text-center mt-4 grid w-full grid-cols-5">
          <a
            href={`/@${id}/invite`}
            target="_blank"
            class="hover:scale-105 hover:z-20 hover:shadow-lg col-span-2 bg-red-200/10 py-3 text-white/70 rounded-lg"
          >
            Invite
          </a>
          <Link
            href={`/@${id}`}
            class="hover:scale-105 hover:z-20 hover:shadow-lg col-span-2 bg-red-200/10 py-3 text-white/70 rounded-lg"
          >
            View
          </Link>
          <button class="hover:scale-105 hover:z-20 hover:shadow-lg bg-red-200/10 py-3 text-white/70 rounded-lg">
            ♻️
          </button>
        </div>
      </div>
      <div class="absolute right-0">
        <span class="rounded-lg flex m-1.5 w-auto border-2 text-center border-red-700 bg-red-700/10 px-2 py-1.5 text-sm font-thick text-red-700">
          <span class="stroke-red-700 fill-red-700 h-4 w-4">
            <VoteIcon />
          </span>{" "}
          {votes ?? 0}
        </span>
      </div>
    </div>
  );
});
