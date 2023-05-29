// $rb help
module.exports = {
  name: "help",
  description: "Help menu of RevBot",
  execute: async ({ message, client }) => {
    // all commands list
    let commands = "";
    console.log(client.commands);
    client.commands.forEach((cmd) => {
      commands += `\n- **${cmd.name}**:- ${cmd.description}`;
    });

    // send help menu
    await message.reply({
      embeds: [
        {
          colour: "#ffffff",
          title: "Help Menu of Rev Bot!",
          description: `## Seek out commands of RevBot...\n${commands}`,
        },
      ],
    });
  },
};
