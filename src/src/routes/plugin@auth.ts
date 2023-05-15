import axios from "axios";
import { $ } from "@builder.io/qwik";
export const useAuthSendConfirmation = $(async (identifier: string) => {
  // promise
  console.log("here");
  return new Promise(async (resolve, reject) => {
    axios
      .post("/@api/auth", { identifier })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
});
