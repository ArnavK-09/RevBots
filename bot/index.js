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
      console.info(`💡 '${PREFIX + " " + file.split(".")[0]}' Command Set...`);
    });
  });

  // set status
  client.user.edit({
    status: {
      text: "Watching Revolt Bot Logins | revbots.vercel.app",
      presence: "Online",
    },
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
  // Check if the command is server-only
  if (command.dm == false && !message.server) {
    return message.channel.sendMessage(
      `### 🚨 Can't run this command in bot direct-message, use command in RevBots server...`
    );
  }

  // Execute the command
  message.channel.startTyping();
  try {
    await command.execute({ client, message, args });
  } catch (err) {
    message.channel.sendMessage(
      `### 🚨 An error occurred while executing that command.\nError:\n\`\`\`bash\n${err.message}\n\`\`\``
    );
  } finally {
    message.channel.stopTyping();
  }
});

// login bot
client.loginBot(process.env["BOT_TOKEN"]);
