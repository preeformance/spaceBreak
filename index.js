const Discord = require("discord.js");
const dotenv = require("dotenv");

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const prefix = "!";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}
client.once("ready", () => {
  console.log("spaceBreak is online");
});

//Bot instructions
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "break") {
    client.commands.get("break").execute(message, args);
  } else if (command === "nap") {
    client.commands.get("nap").execute(message, args);
  }
});

//last line must be login
client.login(process.env.DISCORD_STRING);
