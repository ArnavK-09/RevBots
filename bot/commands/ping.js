// $rb ping
module.exports = {
  name: "ping",
  description: "Ping the bot and receive a response time",
  execute: async ({ message }) => {
    await message.reply({
      content: `🏓 Bot Ping: **${Date.now() - message.createdAt}ms**`,
    });
  },
};
