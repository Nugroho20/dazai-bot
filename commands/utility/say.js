const Discord = require("discord.js");
const fs = require('fs')

exports.run = (client, message, args) => {

  const length = args.join(" ").length
  const panjang = message.content.length - length
  let arg = message.content.slice(panjang)

  if (arg.length<0 || arg.length === 0) return message.channel.send("Please provide the text!")
  message.delete();
  message.channel.send({ embed: {
    "description": arg,
    "color": "#FFFF33"}}).cleanContent;
};

exports.help = {
    name: "say",
    name2: "Say",
    description: "Command to make the bot says what u said",
    category: "general",
      usage: "say <arguments>",
      example: "say hello"
    }
    exports.conf = {
    aliases: [],
    cooldown: 5
    }