// imports
import { component$ } from "@builder.io/qwik";
import { routeAction$, zod$, z, Form } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";

// create bot
export const useAddBot = routeAction$(
  async (data) => {
    const prisma = new PrismaClient();
    const bot = await prisma.Bot.create({
      data,
    });
    return user;
  },
  zod$({
    username: z.string(),
    userid: z.string(),
  })
);

// add bot
export default component$(() => {
  const createUserAction = useAddBot();
  return (
    <section class="text-gray-400">
      <h1>Create User</h1>
      <Form action={createUserAction}>
        <label>
          Name
          <input
            name="username"
            value={createUserAction.formData?.get("username")}
          />
        </label>
        <label>
          Email
          <input
            name="userid"
            value={createUserAction.formData?.get("userid")}
          />
        </label>
        <button type="submit">Create</button>
      </Form>
      {createUserAction.value && (
        <div>
          <h2>User created successfully!</h2>
        </div>
      )}
    </section>
  );
});