// imports
import { component$ } from "@builder.io/qwik";
import { Tag as TagList } from "@/plugins/prisma";

// components
import Tag from "@/components/ui/tag/tag";
import Endline from "@/components/ui/endline/endline";
import GradientText from "@/components/ui/gradient/text";
import SearchBar from "@/components/home/hero/search/bar";

// home page quick search, hero
export default component$(() => {
  // fetching tags
  const JSONTagsList = JSON.parse(JSON.stringify(TagList));
  const Tags = Object.keys(TagList).map((key) => {
    return JSONTagsList[key].toLowerCase();
  });
  return (
    <section class="px-5 py-14">
      <div class="mb-9 flex flex-col mx-auto max-w-3xl justify-between">
        <h1 class="text-left font-semibold md:text-7xl text-5xl">
          Rev the <GradientText text="Revolt" /> bots...
        </h1>{" "}
        <SearchBar />
        <div class="mt-5 gap-x-4 overflow-x-scroll flex flex-scroll">
          {Tags.map((tag) => (
            <Tag label={tag} key={tag} />
          ))}
        </div>
      </div>
      <Endline />
    </section>
  );
});
