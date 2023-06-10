// imports
const axios = require("axios");

// $rb login [code]
module.exports = {
  name: "login",
  dm: false,
  description: "Login into website",
  execute: async ({ message, args }) => {
    // code
    const code = args[0];

    // validate code
    if (!code || !(code.length == 7)) {
      await message.reply({ content: `🚨 Invalid code provided by user...` });
      return;
    }

    // fetch
    const res = await axios
      .patch(`${process.env["API"]}/api/auth`, {
        code: code,
        identifier: message.author.id,
      })
      .catch(async () => {
        await message.reply({
          content: `🚨 Some error occurred in backend...`,
        });
        return;
      });

    // notify user if verified
    if (res?.status == 200) {
      await message.reply({
        content: `✅ You're successfully verified login request. Kindly verify from website to continue....`,
      });
      return;
    } else {
      await message.reply({ content: `🚨 Some error occurred in backend...` });
      return;
    }
  },
};
