// $rb login [code]
module.exports = {
  name: "login",
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
    const req = await fetch("https://api.revolt.chat/");

    // notify user if verified
    if (req.status == 200) {
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
