// import
const { commands, aliases } = require("../client");
const prefix = "!";

const event = {
  name: "messageCreate",
  run: async function (client, message) {
    console.log("here");
    console.log(message)
    //if (message.author?.bot?.owner) return;
    if (message.channel.channel_type !== "TextChannel") return;
   // if (message.author_id === client.user._id) return;
console.log("here");
   /* if (typeof message.content !== "string") {
      if (message.content.type !== "text") return;
      message.content = message.content.content;
    }*/
console.log("here")
    if (!message.content) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift()?.toLowerCase();
console.log("here");
    let command = commands.get(commandName);
    if (!command) {
      const name = aliases.get(commandName);
      if (name) command = commands.get(name);
      else return;
    }
console.log("here");
    await command.run(client, message, args);
  },
};
module.exports = event;
