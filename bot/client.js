// imports
const { Client } = require("revolt.js");
const { readdirSync } = require("fs");

// new client
const client = new Client({
  autoReconnect: true,
});

// handler variables
const commands = new Map();
const aliases = new Map();

// exports
module.exports = { commands, aliases, client };

readdirSync("./commands", { withFileTypes: true }).forEach((dirs) => {
  if (dirs.isFile()) return;
  const cmds = readdirSync(`./commands/${dirs.name}/`).filter((file) =>
    file.endsWith(".js")
  );

  for (const file of cmds) {
    const { command } = require(`./commands/${dirs}/${file}`);

    commands.set(command.name, command);
    console.log(`Command loaded: ${command.name}`);

    if (command.aliases?.length) {
      command.aliases.forEach((alias) => aliases.set(alias, command.name));
    }
  }
});

readdirSync("./events").forEach((file) => {
  if (!file.endsWith(".js")) return;

  const event = require(`./events/${file}`);
  console.log(event.name);
  client.on(event.name, (...args) => event.run(client, ...args));
});

client.loginBot();
