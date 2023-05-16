// imports
import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useProtectedRoute = routeLoader$(async (e, args) => {
  const user = "i";
  console.log(args);
  if (!user) {
    throw e.redirect(302, "/auth/login");
  }
  return user;
});

export default component$(() => {
  useProtectedRoute(true);
  return (
    <>
      {" "}
      <Slot />
    </>
  );
});
