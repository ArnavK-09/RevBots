// imports
import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";

// components
import Navbar from "@/components/layout/navbar/navbar";
import MobileMenu from "@/components/layout/menu/menu";
import LoadingBar from "@/components/ui/loadingbar/loadingbar";

// loader
export const useGetSearchedBot = routeLoader$(
  async ({ params, status }: any) => {
    const data = params.query;

    if (!data) {
      status(404);
    }
    return data;
  }
);

// layout
export default component$(() => {
  // get page location
  const location = useLocation();
  return (
    <>
      <header>
        <Navbar />
        {JSON.stringify(location.isNavigating) == "true" && <LoadingBar />}
        {/*<MobileMenu />*/}
      </header>
      <main class="pt-20">
        <h1>TODO{`${location.isNavigating}`}</h1>
        <Slot />
      </main>
      <footer />
    </>
  );
});
