// imports
import { component$ } from "@builder.io/qwik";

// props
interface Props {
  text: string;
  styling?: string;
}

// gradient text
export default component$(({ text, styling }: Props) => {
  return (
    <span
      class={`${
        styling ?? ""
      } text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-800 to-red-500`}
    >
      {text ?? "Gradient Text"}
    </span>
  );
});
