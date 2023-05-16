// imports
import axios from "axios";

// new client
export default axios.create({
  baseURL: "https://api.revolt.chat/",
  timeout: 2000,
  headers: { "X-Bot-Token": import.meta.env.PUBLIC_BOT_TOKEN },
});

// jwa secret
export const secret = import.meta.env.PUBLIC_SECRET;
