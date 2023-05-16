// imports
import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import marked from "marked";

// props
interface Props {
  markdown: String;
}

// component for links action of @bot page
export default component$(({ markdown }: Props) => {
  //formatted html of provided mark down
  const html = useSignal<string>("No Data...");

  //parsing
  useTask$(async () => {
    html.value = await marked.parse(markdown, {
      langPrefix: "",
      mangle: false,
      headerIds: false,
    });
  });
  return (
    <div class="mx-2 mt-4">
      <h2 class="tracking-wider mb-2 text-lg text-white/80 font-extrabold">
        Description:
      </h2>
      <div class="bg-gray-200/20 shadow-lg rounded-lg w-full my-3 mx-1 md:mx-5 md:p-4 p-2">
        <div
          class="text-white/90 hyphens-auto"
          dangerouslySetInnerHTML={html}
        ></div>
      </div>
    </div>
  );
});
