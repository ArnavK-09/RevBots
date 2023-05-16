// imports
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

// component for links action of @bot page
export default component$(() => {
  return (
    <div class="gap-x-1 text-center mt-4 grid w-full grid-cols-5">
      <a
        target="_blank"
        href="invite"
        class="col-span-2 py-3 text-black rounded-lg font-thick border border-black bg-red-500"
      >
        Invite
      </a>
      <Link
        href="vote"
        class="hover:shadow-lg col-span-2 bg-white/10 py-3 text-white/90 rounded-lg"
      >
        Vote
      </Link>
      <button class="bg-red-200/10 py-3 rounded-lg">♻️</button>
    </div>
  );
});
