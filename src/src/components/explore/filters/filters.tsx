// imports
import { component$ } from "@builder.io/qwik";

// Filters to choose bots from
export default component$(() => {
  return (
    <div class="w-full px-5">
      <div class="p-3 shadow-md border-2 border-[#141414]/80 bg-[#141414]/60 rounded-lg flex w-full justify-between">
        <div>🔃</div>
        <div>💿</div>
      </div>
    </div>
  );
});
