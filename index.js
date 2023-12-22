const Discord = require("discord.js");

const dotenv = require("dotenv").config({ debug: true });

const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
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
client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  var picture = get(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`
  );

  if (message.content === "!break") {
    message.reply("take a break!", picture[0]);
  }
  // const args = message.content.slice(prefix.length).split(/ +/);
  // const command = args.shift().toLowerCase();

  // if (command === "break") {
  //   message.reply("break acknowledged");
  //   client.commands.get("break").execute(message, args);
  // } else if (command === "nap") {
  //   client.commands.get("nap").execute(message, args);
  //  }
});

//last line must be login
client.login(process.env.DISCORD_STRING);
