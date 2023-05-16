// imports
import {
  component$,
  Slot,
  createContextId,
  useContext,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";

// components
import Navbar from "@/components/layout/navbar/navbar";
import MobileMenu from "@/components/layout/menu/menu";
import LoadingBar from "@/components/ui/loadingbar/loadingbar";
import { RefreshIcon as LoadingIcon } from "@/icons";

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

// Global store
export const GlobalStateCTX = createContextId<any>("globalState");
// layout
export default component$(() => {
  // get page location
  const location = useLocation();

  // setup global store
  const globalState = useStore({ loading: false });
  useContextProvider(GlobalStateCTX, globalState);

  // layout
  return (
    <>
      <header class={"bg-black"}>
        <Navbar />
        {(globalState.loading ||
          JSON.stringify(location.isNavigating).toString() == "true") && (
          <LoadingBar />
        )}
        {/*<MobileMenu />*/}
      </header>
      <main class="pt-20">
        {/* Global Loading */}
        {globalState.loading && (
          <section class="flex justify-center items-center z-30 p-auto h-screen w-screen bg-black fixed left-0 top-0 opacity-50">
            <div class="stroke-white opacity-100 animate-spin h-10 w-10">
              <LoadingIcon />
            </div>
          </section>
        )}
        <Slot />
      </main>
      <footer />
    </>
  );
});
