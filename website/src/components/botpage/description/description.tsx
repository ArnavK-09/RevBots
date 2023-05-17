// imports
import { component$, useSignal } from "@builder.io/qwik";
import Showdown from "showdown";

// props
interface Props {
  markdown: string;
}

// md convert
const MDtoHTML = new Showdown.Converter();

// component for links action of @bot page
export default component$(({ markdown }: Props) => {
  //formatted html of provided mark down
  const html = useSignal<string>("No Data...");

  // parsing
  html.value = MDtoHTML.makeHtml(markdown) as string;

  return (
    <div class="mx-2 mt-4">
      <h2 class="tracking-wider mb-2 text-lg text-white/80 font-extrabold">
        Description:
      </h2>
      <div class="bg-gray-200/20 shadow-lg rounded-lg w-full my-3 mx-1 md:mx-5 md:p-4 p-2">
        <div
          class="text-white/90 hyphens-auto"
          dangerouslySetInnerHTML={html.value}
        ></div>
      </div>
    </div>
  );
});
