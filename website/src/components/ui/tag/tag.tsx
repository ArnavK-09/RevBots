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
      <div class="px-2 capitalize align-middle hover:brightness-125 flex bg-red-700/20 text-xs py-1 md:text-sm rounded-lg">
        <span class="font-extrabold text-red-700 mr-1.5">#</span>{" "}
        {label ?? "Tag Name"}
      </div>
    </Link>
  );
});
