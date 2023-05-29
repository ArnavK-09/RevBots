// imports
const { getCode, clean } = require("@elara-services/eval-helper");
// $rb eval
module.exports = {
  name: "eval",
  ownerOnly: true,
  description: "Eval some code by developer",
  execute: async ({ message, client, args }) => {
    try {
      const evaled = await getCode({ code: args.join(" ") });
      const code = await clean(eval(evaled), [client.session]);

      return message.reply({
        embeds: [
          {
            colour: "#ffffff",
            description: `✅ **Output of provided code:-**\n\`\`\`js\n${code}\n\`\`\``,
          },
        ],
      });
    } catch (e) {
      return message.reply({
        embeds: [
          {
            colour: "#ff0000",
            description: `🚨 **Error:-**\n\`\`\`js\n${e.stack}\`\`\``,
          },
        ],
      });
    }
  },
};
