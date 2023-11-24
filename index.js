const Discord = require("discord.js");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("spaceBreak is online");
});

//last line must be login
client.login("grabStringFromDiscord");
