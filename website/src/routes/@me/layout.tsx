// imports
import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useProtectedRoute = routeLoader$(async (e) => {
  const user = "i";
  if (!user) {
    throw e.redirect(302, "/auth/login");
  }
  return user;
});

export default component$(() => {
  useProtectedRoute();
  return (
    <>
      <Slot />
    </>
  );
});
