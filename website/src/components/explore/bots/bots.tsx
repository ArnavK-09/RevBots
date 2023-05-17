// imports
import { component$ } from "@builder.io/qwik";

// components
import BotCard from "@/components/cards/bot/bot";

// props
interface Props {
  heading: string;
  description?: string;
}
// Section to show bots of corresponding category
export default component$(({ heading, description }: Props) => {
  // temp data
  const tempData = [
    {
      name: "test",
      id: "test",
    },
  ];

  return (
    <section class="my-5 px-5">
      <div>
        <h2 class="font-medium text-3xl">{heading}</h2>
        {description && <p class="text-gray-400/80 text-sm">{description}</p>}
      </div>
      <div class="pt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {tempData.map((botProps) => (
          <BotCard {...botProps} key={botProps.id} />
        ))}
      </div>
    </section>
  );
});
