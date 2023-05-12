// imports
import { component$ } from "@builder.io/qwik";

// components
import { RefreshIcon } from "@/icons";
import { Link } from "@builder.io/qwik-city";

// Filters to choose bots from
export default component$(() => {
  return (
    <div class="w-full px-5">
      <div class="p-3 shadow-md border-2 border-[#141414]/80 bg-[#141414]/60 rounded-lg flex w-full justify-between">
        <Link reload>
          <div class="h-6 w-6 stroke-white rounded-full p-1 scale-150 hover:bg-white/10">
            <RefreshIcon />
          </div>
        </Link>
        <div>
          <div>
            <span class="text-xs tracking-wider font-thick text-gray-400/70">
              Sort By:{" "}
            </span>
            <select class="text-sm text-center px-3 py-px font-medium rounded border-2 border-red-700 text-white/80 bg-red-700/10 appearance-none">
              <option>Top Voted</option>
              <option>Top Invited</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
});
