// ping command
const PingCommand = {
  name: "ping",
  description: "Check if the bot is online and responsive",
  usage: ["ping"],
  run: async function (client, message) {
    console.log("herelso")
    return await message.reply(
      {
        content: `:ping_pong: Pong!s\`\nRoundtrip: \`${Date.now() - message.createdAt}ms\``,
      },
      false
    );
  },
};

// export
module.exports = PingCommand;