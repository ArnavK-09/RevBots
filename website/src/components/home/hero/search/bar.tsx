// imports
import { component$, useSignal } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

// search bar
export default component$(() => {
  const nav = useNavigate();
  const query = useSignal<string>("");
  return (
    <>
      <form
        preventdefault:submit
        onSubmit$={async () => {
          await nav(`/search/${query.value}`);
        }}
      >
        <input
          type="text"
          bind:value={query}
          required
          class="py-3 my-3 px-4 block w-full bg-white/10 shadow-md outline-none rounded-md"
          placeholder="Explore bots..."
        />
      </form>
    </>
  );
});
