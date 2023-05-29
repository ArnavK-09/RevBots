// imports
const revolt = require("revolt.js");
const fs = require("fs");

// new client
const client = new revolt.Client();
const PREFIX = "$rb";
const owners = ["01H03C6Q86JP0XT39RTDPSS19V"];
client.commands = new Map();

// on ready
client.once("ready", () => {
  // Load commands from the ./commands directory
  fs.readdir("./commands", (err, files) => {
    if (err) console.error(err);
    const jsFiles = files.filter((f) => f.endsWith(".js"));
    if (jsFiles.length === 0) {
      console.warn("⚠️ No command files found.");
      return;
    }
    jsFiles.forEach((file) => {
      const command = require(`./commands/${file}`);
      client.commands.set(command.name, command);
      console.info(
        `💡 \'${PREFIX + " " + file.split(".")[0]}\' Command Set...`
      );
    });
  });

  // start info
  console.log("\n✅ Bot started!\n");
});

// on message
client.on("messageCreate", async (message) => {
  // Ignore messages from our own bot
  if (message.author.bot) return;

  // Check if the message starts with our prefix
  if (!message.content.startsWith(PREFIX)) return;

  // Split the message into command and arguments
  const [commandName, ...args] = message.content
    .slice(PREFIX.length)
    .trim()
    .split(/ +/g);

  // Check if the command exists
  const command = client.commands.get(commandName.toLowerCase());
  if (!command)
    return message.channel.sendMessage(
      `⚠️ Unknown command: \`${PREFIX + commandName}\``
    );

  // Check if the command is owner-only
  if (command.ownerOnly == true && !owners.includes(message.author.id)) return;

  // Execute the command
  try {
    await command.execute({ client, message, args });
  } catch (err) {
    console.error(err);
    message.channel.sendMessage(
      "🚨 An error occurred while executing that command."
    );
  }
});

// login bot
client.loginBot(process.env["BOT_TOKEN"]);
