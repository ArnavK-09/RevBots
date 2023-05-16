// import
import { component$, useStore, $, useContext } from "@builder.io/qwik";
import axios from "axios";
import { useNavigate } from "@builder.io/qwik-city";
import { GlobalStateCTX } from "@/routes/layout.tsx";

// log in page
export default component$(() => {
  // base hooks
  const nav = useNavigate();
  const globalState = useContext(GlobalStateCTX);
  const loginState = useStore({
    identifier: "",
    code: null,
    done: false,
    userCode: "",
  });

  // handle login
  const handleLogin = $(async () => {
    // loading on
    globalState.loading = true;

    // client validate
    if (!(loginState.identifier.length == 26)) {
      /* not valid ULID */
      globalState.loading = false;
      alert("Revolt identifier must be of 26 chracters...");
      return;
    }

    // api req
    await axios
      .post("/@api/auth", {
        identifier: loginState.identifier,
      })
      .then((e) => {
        /* to confirm code */
        globalState.loading = false;
        loginState.code = e.data.code;
      })
      .catch(async (e) => {
        /* home because err */
        globalState.loading = false;
        alert(e.message);
        await nav("/");
      });
  });

  // verify code
  const verifyCode = $(async () => {
    /* verify if user has verified through bot */
    globalState.loading = true;
    await axios
      .get(`/@api/auth?code=${loginState.code}`)
      .then((e) => {
        loginState.done = true;
        globalState.loading = false;
      })
      .catch(async (e) => {
        /* lol err */
        globalState.loading = false;
        alert(e.message);
      });
  });

  // handle done status
  const handleDone = $(async () => {
    await nav("/@me");
  });
  return (
    <>
      <div class="h-screen items-center my-10">
        {/* Login form */}
        <div class="mx-auto px-8 text-center">
          <h1 class="font-extrabold mb-14 text-3xl tracking-widest">
            Please login your account
          </h1>
          <h3 class="mb-2 tracking-wider text-1xl">
            <span class="font-thick text-gray-400 mx-px text-sm">Step1</span>{" "}
            Enter your Revolt Identifier...
          </h3>
          <form preventdefault:submit onSubmit$={handleLogin}>
            <input
              bind:value={loginState.identifier}
              disabled={!(loginState.code == null) || globalState.loading}
              onInput$={(_, el) => (loginState.identifier = el.value)}
              class="py-3 my-3 px-4 block w-full bg-white/10 shadow-md outline-none rounded-md"
              placeholder="Enter your revolt identifier here..."
              required
            />
            <Button
              disableStatus={!(loginState.code == null)}
              type="submit"
              label="Submit"
            />
          </form>
        </div>
        {/*verify section */}
        {loginState.code && (
          <div class="w-full mt-11 px-8 text-center">
            <h3 class="mb-2 tracking-wider text-1xl">
              <span class="font-thick text-gray-400 mx-px text-sm">Step2</span>{" "}
              Enter Verification Code in our server...
            </h3>
            <pre class="bg-transparent brightness-150 select-all border-red-700 border rounded-lg p-1 shadow-lg">
              {loginState.code ?? "No data found..."}
            </pre>
            <Button
              type="button"
              disableStatus={loginState.done}
              label="Verify"
              onClick={verifyCode}
            />
          </div>
        )}
        {/*done section */}
        {loginState.done && (
          <div class="w-full mt-11 px-8 text-center">
            <h3 class="mb-2 tracking-wider text-1xl">
              <span class="font-thick text-gray-400 mx-px text-sm">Step3</span>{" "}
              You are done now...
            </h3>
            <Button type="button" label="Enjoy 🎉" onClick={handleDone} />
          </div>
        )}
      </div>
    </>
  );
});

// login button component
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disableStatus?: Boolean;
  type: "button" | "submit";
}
const Button = component$(
  ({ type, label, onClick, disableStatus = false }: ButtonProps) => {
    // global state
    const globalState = useContext(GlobalStateCTX);
    return (
      <>
        <button
          disabled={globalState.loading || disableStatus}
          class="w-full disabled:brightness-90 p-2.5 my-4 text-black text-md rounded-lg font-thick border border-black hover:scale-105 bg-red-500"
          onClick$={onClick ?? $(() => null)}
          type={type}
        >
          {label}
        </button>
      </>
    );
  }
);
