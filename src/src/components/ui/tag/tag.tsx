// imports
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

// props
interface Props {
  label: string;
}

// Bot tag
export default component$(({ label }: Props) => {
  return (
    <Link href={`/search/tags/${label}`}>
      <div class="px-2 align-middle group hover:brightness-125 flex py-0.5 text-xs backdrop-blur-sm bg-red-700/20 rounded-lg">
        <span class="font-extrabold text-sm text-red-700 mr-1.5">#</span>{" "}
        {label ?? "Tag Name"}
      </div>
    </Link>
  );
});
